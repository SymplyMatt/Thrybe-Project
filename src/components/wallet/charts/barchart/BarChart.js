import React from "react";
import { Bar } from "react-chartjs-2";
import { chart as ChartJS } from "chart.js/auto";

const BarChart = ({
  barChartData,
  barChartOptions,
  page,
  setPage,
  showBtn,
  setShowBtn,
  walletPage,
  setWalletPage,
}) => {
  return (
    <div className='col-xl-7 col-12 d-flex flex-column flex-grow-1 mb-3'>
      <div className='custom-card h-100'>
        <div className='d-flex justify-content-between'>
          <h5>PAYMENTS & TRANSACTIONS</h5>
          <a href='#'>
            <img
              src='./assets/images/right-pointer.svg'
              className='img-fluid'
              alt=''
              onClick={(e) => {
                e.preventDefault();
                setWalletPage("transactions-list");
              }}
            />
          </a>
        </div>
        <div class='mt-3 d-flex align-items-center'>
          <div class='bgColored-header'>All transactions</div>
          <div class='hits ml-3'>
            <div></div>
            <h6 class='mb-0'>Profile Boost</h6>
          </div>
          <div class='visitors ml-3'>
            <div></div>
            <h6 class='mb-0'>Thrybe Seek</h6>
          </div>
          <div class='subscription ml-3'>
            <div></div>
            <h6 class='mb-0'>Subscription</h6>
          </div>
        </div>
        <div className='chart-area mt-3'>
          <Bar data={barChartData} options={barChartOptions} />
        </div>
        <div className='period-filter mt-4'>
          <ul className='nav nav-pills period-filter-links'>
            <li className='nav-item'>
              <a className='nav-link active' href='#'>
                Day
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Week
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Month
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Year
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
