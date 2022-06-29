import React from "react";
import { Doughnut } from "react-chartjs-2";
import { chart as ChartJS } from "chart.js/auto";

const DoughnutChart = ({
  doughnutChartData,
  doughnutChartOptions,
  page,
  setPage,
  showBtn,
  setShowBtn,
  walletPage,
  setWalletPage,
}) => {
  return (
    <div className='col-xl-5 col-12 d-flex flex-column flex-grow-1 mb-4'>
      <div className='h-100'>
        <div className='d-flex justify-content-between'>
          <h5>GIFTS PURCHASE</h5>
          <a href='#'>
            <img
              src='./assets/images/right-pointer.svg'
              className='img-fluid'
              alt=''
              onClick={(e) => {
                e.preventDefault();
                setWalletPage("gift-list");
              }}
            />
          </a>
        </div>
        <div className='chart-area mt-4 d-flex flex-column justify-content-center'>
          <div className='row align-items-center mt-4'>
            <div className='col-lg-7'>
              <div className='p-3 position-relative'>
                <Doughnut
                  data={doughnutChartData}
                  options={doughnutChartOptions}
                />
              </div>
            </div>
            <div className='col-lg-5'>
              <div>
                <p className='f-weight-600 font-sm mb-0'>
                  ALL TOKEN TRANSACTIONS
                </p>
                <h3 className='f-weight-600'>300K</h3>

                <hr />
              </div>
              <div className='d-flex flex-column'>
                <div className='visitors align-items-center mb-2'>
                  <div style={{ height: "25px", width: "25px" }}></div>
                  &nbsp;&nbsp;
                  <h6 className='mb-0'>Purchases</h6>
                </div>
                <div className='hits align-items-center mb-2'>
                  <div style={{ height: "25px", width: "25px" }}></div>
                  &nbsp;&nbsp;
                  <h6 className='mb-0'>Exchanges</h6>
                </div>
              </div>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-12 mb-2'>
              <ul className='nav nav-tabs pie-days mt-4 mb-4'>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Mon
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Tue
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link active' href='#'>
                    Wed
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link'>Thu</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link'>Fri</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link'>Sat</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link'>Sun</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='period-filter mt-4'>
          <ul className='nav nav-pills period-filter-links'>
            <li className='nav-item'>
              <a className='nav-link active' href='#'>
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

export default DoughnutChart;
