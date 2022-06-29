import React, { Component, useState, useEffect } from "react";
import BarChart from "./barchart/BarChart";
import DoughnutChart from "./doughnut/Doughnut";
import { useNavigate } from "react-router-dom";

const Charts = ({ page, setBarChartSection }) => {
  const navigate = useNavigate();
  let [token, setToken] = useState(" ");
  let [showResult, setShowResult] = useState(false);
  const [doughnutChartData, setDoughnutChartData] = useState({
    labels: ["Android", "IOS"],
    datasets: [
      {
        label: null,
        data: [5000, 12000],
        backgroundColor: ["#842A83", "rgba(132, 42, 131, 0.45)"],
        borderWidth: 1,
      },
    ],
  });
  const [doughnutChartOptions, setDoughnutChartOptions] = useState({
    plugins: {
      legend: {
        display: false,
      },
    },
  });
  const [dailyAppUsage, setDailyAppUsage] = useState({
    dailyAppUsage: [],
  });
  let [dailyAppUsageLabels, setDailyAppUsageLabels] = useState("");
  let [dailyAppUsageHits, setDailyAppUsageHits] = useState("");
  let [dailyAppUsageVisitors, setDailyAppUsageVisitors] = useState("");
  const [barChartData, setBarChartData] = useState({
    labels: [...dailyAppUsageLabels],
    datasets: [
      {
        label: null,
        data: [...dailyAppUsageHits],
        backgroundColor: "#842A83",
        borderWidth: 1,
      },
      {
        label: null,
        data: [...dailyAppUsageVisitors],
        backgroundColor: "rgba(132, 42, 131, 0.45)",
        borderWidth: 1,
      },
    ],
  });
  const [barChartOptions, setBarChartOptions] = useState({
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: false,
        min: 0,
        max: 10,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  });

  useEffect(() => {
    setToken(
      localStorage.getItem("token") || sessionStorage.getItem("token") || " "
    );
  }, [page]);
  useEffect(() => {
    if (token && token != " ") {
      fetchDailyAppUsage().catch((error) => {
        console.error(error);
        setTimeout(() => {
          sessionStorage.removeItem("token");
          sessionStorage.removeItem("img");
          sessionStorage.removeItem("pages");
          navigate("/login");
        }, 1500);
      });
    }
  }, [page, token]);

  async function fetchDailyAppUsage() {
    let results = await fetch(
      "https://thrybe.azurewebsites.net/api/BackofficeUser/GetDailyAppUsage",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    results = await results.json();
    setDailyAppUsage(results);
    setBarChartSection(true);
  }

  useEffect(() => {
    let labels = dailyAppUsage.dailyAppUsage.map((item) => {
      return item.time;
    });
    let hits = dailyAppUsage.dailyAppUsage.map((item) => {
      return item.hitCount;
    });
    let visitors = dailyAppUsage.dailyAppUsage.map((item) => {
      return item.visitorCount;
    });
    let min = Math.min(...visitors, ...hits);
    let max = Math.max(...visitors, ...hits);
    setDailyAppUsageLabels(labels);
    setDailyAppUsageHits(hits);
    setDailyAppUsageVisitors(visitors);
    setBarChartData({
      labels: [...labels],
      datasets: [
        {
          label: null,
          data: [...visitors],
          backgroundColor: "#842A83",
          borderWidth: 1,
        },
        {
          label: null,
          data: [...hits],
          backgroundColor: "rgba(132, 42, 131, 0.45)",
          borderWidth: 1,
        },
      ],
    });
    setBarChartOptions({
      scales: {
        x: {
          stacked: true,
          grid: {
            display: false,
          },
        },
        y: {
          beginAtZero: false,
          min: 0,
          max: max,
          grid: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    });
  }, [dailyAppUsage]);

  return (
    <div className='row'>
      <div className='col-12 mb-3'>
        <div className='custom-card'>
          <div className='row mt-3'>
            {dailyAppUsage.dailyAppUsage.length > 1 && (
              <BarChart
                barChartData={barChartData}
                barChartOptions={barChartOptions}
              />
            )}
            <DoughnutChart
              doughnutChartData={doughnutChartData}
              doughnutChartOptions={doughnutChartOptions}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
