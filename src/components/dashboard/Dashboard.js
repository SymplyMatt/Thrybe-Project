import React, { Component, useState, useEffect } from "react";
import Main from "./main/Main";
import SideNav from "./sidenav/SideNav";
import { useNavigate } from "react-router-dom";
import Loader from "../loader/Loader";
const Dashboard = ({ page, setPage, showNav, setShowNav }) => {
  const navigate = useNavigate();
  let [pages, setPages] = useState(" ");
  let [userImg, setUserImg] = useState(" ");
  let [token, setToken] = useState(" ");
  const [usersSection, setUsersSection] = useState(false);
  const [giftsSection, setGiftsSection] = useState(false);
  const [talksSection, setTalksSection] = useState(false);
  const [roomsSection, setRoomsSection] = useState(false);
  const [newestUsersSection, setNewestUsersSection] = useState(false);
  const [trendingTalksSection, setTrendingTalksSection] = useState(false);
  const [barChartSection, setBarChartSection] = useState(false);
  useEffect(() => {
    document.title = "Dashboard";
    setPage("dashboard");
  }, [page]);

  useEffect(() => {
    setPages(localStorage.getItem("pages") || sessionStorage.getItem("pages"));
    if (!pages) {
      setPage("login");
      navigate("/login");
    }
  }, [page]);

  useEffect(() => {
    setUserImg(localStorage.getItem("img") || sessionStorage.getItem("img"));
    if (!userImg) {
      setPage("login");
      navigate("/login");
    }
  });

  useEffect(() => {
    setToken(localStorage.getItem("token") || sessionStorage.getItem("token"));
    if (!token) {
      setPage("login");
      navigate("/login");
    }
  });

  return (
    <>
      <div
        className={`${
          trendingTalksSection &&
          newestUsersSection &&
          barChartSection &&
          usersSection &&
          giftsSection &&
          talksSection &&
          roomsSection
            ? "show"
            : "not-show"
        }`}
      >
        <SideNav
          page={page}
          setPage={setPage}
          showNav={showNav}
          setShowNav={setShowNav}
        />
      </div>
      <div
        className={`${
          trendingTalksSection &&
          newestUsersSection &&
          barChartSection &&
          usersSection &&
          giftsSection &&
          talksSection &&
          roomsSection
            ? "show"
            : "not-show"
        }`}
      >
        <Main
          showNav={showNav}
          setShowNav={setShowNav}
          page={page}
          setPage={setPage}
          setTrendingTalksSection={setTrendingTalksSection}
          setNewestUsersSection={setNewestUsersSection}
          setBarChartSection={setBarChartSection}
          setUsersSection={setUsersSection}
          setGiftsSection={setGiftsSection}
          setTalksSection={setTalksSection}
          setRoomsSection={setRoomsSection}
        />
      </div>
      <div
        className={`${
          trendingTalksSection &&
          newestUsersSection &&
          barChartSection &&
          usersSection &&
          giftsSection &&
          talksSection &&
          roomsSection
            ? "not-show"
            : "show"
        }`}
      >
        <Loader />
      </div>
    </>
  );
};

export default Dashboard;
