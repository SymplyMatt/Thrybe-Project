import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SinglePlan = ({ page, setPage, plansPage, setPlansPage }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("activities");
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <div className='main-content'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 mt-5 mb-3'>
            <ul className='myBreadcrumb p-0'>
              <li
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/");
                }}
              >
                <a href='#' className='d-flex align-items-center'>
                  <i className='fa fa-home text-darkGrey'></i>
                  <span className='font-xs pl-2 f-weight-500 mt-1 text-dark'>
                    Home
                  </span>
                </a>
              </li>
              <li
                className=''
                onClick={(e) => {
                  e.preventDefault();
                  setPlansPage("mgt");
                }}
              >
                <a href='#' className='d-flex align-items-center'>
                  <span className='font-xs f-weight-500 mt-1 text-dark'>
                    Plans Management
                  </span>
                </a>
              </li>
              <li className='active'>
                <a href='#' className='d-flex align-items-center'>
                  <span className='font-xs f-weight-500 mt-1 text-dark'>
                    Base Membership
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {plansPage == "single" && (
          <>
            <div className='row mt-3 mb-3'>
              <div className='col-lg-6 d-flex flex-column flex-grow-1'>
                <div className='custom-card h-100'>
                  <div className='row align-items-center justify-content-around'>
                    <div
                      className='col-md-3 h-100'
                      style={{
                        backgroundColor: "#842a83",
                        borderRadius: "10px",
                      }}
                    >
                      <div className='w-100 p-2'>
                        <img
                          src='./assets/images/naira-icon.svg'
                          alt='naira-icon'
                        />
                        <p
                          className='text-white m-0 pt-1 f-weight-800'
                          style={{ fontSize: "20px" }}
                        >
                          3,000
                        </p>
                        <p className='text-white font-sm m-0 pt-1'>Price</p>
                      </div>
                    </div>
                    <div className='col-md-7 pt-4 mt-2 d-flex flex-column'>
                      <h6 className='f-weight-600 m-0'>Base Membership</h6>
                      <p className='mt-2 font-sm'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent volutpat, quam eu scelerisque vestibulum, nulla
                        Praesent volutpat, quam eu scelerisque vestibulum, nulla
                      </p>
                    </div>
                  </div>
                  <div className='mt-5 table-responsive'>
                    <table className='table table-borderless table-singleGift-summary'>
                      <tbody>
                        <tr>
                          <td>Subscription Type</td>
                          <td className='text-right'>Profile Boost</td>
                        </tr>
                        <tr>
                          <td>Subscription Duration</td>
                          <td className='text-right'>1 day</td>
                        </tr>
                        <tr>
                          <td>Status</td>
                          <td className='text-right'>Active</td>
                        </tr>
                        <tr>
                          <td>Background Color</td>
                          <td className='text-right'>Red</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className='px-3 mb-4 mt-4'>
                    <div className='row'>
                      <div
                        className='col-4'
                        style={{ borderRight: "1px solid #f2f2f2" }}
                      >
                        <a href='' className='d-flex align-items-center'>
                          <img
                            src='./assets/images/Edit.svg'
                            className='img-fluid'
                            alt='Edit'
                          />
                          <span className='ml-2 text-dark font-sm2 f-weight-600'>
                            Edit
                          </span>
                        </a>
                      </div>
                      <div
                        className='col-4'
                        style={{ borderRight: "1px solid #f2f2f2" }}
                      >
                        <a href='' className='d-flex align-items-center'>
                          <img
                            src='./assets/images/suspend-icon-black.svg'
                            className='img-fluid'
                            alt='Suspend'
                          />
                          <span className='ml-2 text-dark font-sm2 f-weight-600'>
                            Suspend
                          </span>
                        </a>
                      </div>
                      <div className='col-4'>
                        <a href='' className='d-flex align-items-center'>
                          <img
                            src='./assets/images/delete-icon-black.svg'
                            className='img-fluid'
                            alt='Delete'
                          />
                          <span className='ml-2 text-dark font-sm2 f-weight-600'>
                            Delete
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-6 d-flex flex-column flex-grow-1'>
                <div className='store-analytics-div h-100 mb-0'>
                  <div style={{ borderBottom: "1px solid #f2f2f2" }}>
                    <h6
                      className='mb-0 pb-2'
                      style={{
                        borderBottom: "2px solid #178972",
                        width: "25%",
                      }}
                    >
                      Analytics
                    </h6>
                  </div>
                  <div className='row mt-4'>
                    <div className='col-lg-4'>
                      <div className='d-flex align-items-center'>
                        <img
                          src='./assets/images/subscribers-icon.svg'
                          className='img-fluid'
                          alt='User'
                        />
                        <div className='ml-3'>
                          <h6 className='font-sm2 f-weight-500'>SUBSCRIBERS</h6>
                          <h6 className='f-weight-600 mb-0'>3200</h6>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4'>
                      <div className='d-flex align-items-center'>
                        <img
                          src='./assets/images/expiring-soon-icon.svg'
                          className='img-fluid'
                          alt='User'
                        />
                        <div className='ml-3'>
                          <h6 className='font-sm2 f-weight-500'>
                            EXPIRING SOON
                          </h6>
                          <h6 className='f-weight-600 mb-0'>320</h6>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4'>
                      <div className='d-flex align-items-center'>
                        <img
                          src='./assets/images/renewed-icon.svg'
                          className='img-fluid'
                          alt='User'
                        />
                        <div className='ml-3'>
                          <h6 className='font-sm2 f-weight-500'>RENEWED</h6>
                          <h6 className='f-weight-600 mb-0'>129</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='users-table-div mt-4'>
                    <div className='d-flex justify-content-between align-items-center'>
                      <h6 className='mb-0'>USAGE</h6>
                      <a
                        href='#'
                        className='f-weight-600 font-sm2 text-dark'
                        onClick={(e) => {
                          e.preventDefault();
                          setPlansPage("single-2");
                        }}
                      >
                        View all
                      </a>
                    </div>
                    <div className='activity-timeline position-relative mt-4'>
                      <div
                        className='demarcator position-absolute'
                        style={{
                          width: "2px",
                          height: "100%",
                          top: "0",
                          left: "18%",
                          backgroundColor: "#e6e6e6",
                        }}
                      ></div>
                      <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                        <div className='position-absolute green-circle'></div>
                        <div className='col-lg-3 col-3'>
                          <span className='font-sm2 f-weight-600'>00 :09</span>
                        </div>
                        <div className='col-lg-9 col-9'>
                          <p className='mb-0 notifs-content font-sm2'>
                            <span className='purple-bold-text'>
                              Farouk Asmaya
                            </span>
                            renewed her
                            <span className='purple-bold-text'>
                              Base Membership
                            </span>
                            Subscription
                          </p>
                        </div>
                      </div>
                      <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                        <div className='position-absolute green-circle'></div>
                        <div className='col-lg-3 col-3'>
                          <span className='font-sm2 f-weight-600'>00 :09</span>
                        </div>
                        <div className='col-lg-9 col-9'>
                          <p className='mb-0 notifs-content font-sm2'>
                            <span className='purple-bold-text'>
                              Farouk Asmaya
                            </span>
                            renewed her
                            <span className='purple-bold-text'>
                              Base Membership
                            </span>
                            Subscription
                          </p>
                        </div>
                      </div>
                      <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                        <div className='position-absolute green-circle'></div>
                        <div className='col-lg-3 col-3'>
                          <span className='font-sm2 f-weight-600'>00 :09</span>
                        </div>
                        <div className='col-lg-9 col-9'>
                          <p className='mb-0 notifs-content font-sm2'>
                            <span className='purple-bold-text'>
                              Farouk Asmaya
                            </span>
                            renewed her
                            <span className='purple-bold-text'>
                              Base Membership
                            </span>
                            Subscription
                          </p>
                        </div>
                      </div>
                      <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                        <div className='position-absolute green-circle'></div>
                        <div className='col-lg-3 col-3'>
                          <span className='font-sm2 f-weight-600'>00 :09</span>
                        </div>
                        <div className='col-lg-9 col-9'>
                          <p className='mb-0 notifs-content font-sm2'>
                            <span className='purple-bold-text'>
                              Farouk Asmaya
                            </span>
                            renewed her
                            <span className='purple-bold-text'>
                              Base Membership
                            </span>
                            Subscription
                          </p>
                        </div>
                      </div>
                      <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                        <div className='position-absolute green-circle'></div>
                        <div className='col-lg-3 col-3'>
                          <span className='font-sm2 f-weight-600'>00 :09</span>
                        </div>
                        <div className='col-lg-9 col-9'>
                          <p className='mb-0 notifs-content font-sm2'>
                            <span className='purple-bold-text'>
                              Farouk Asmaya
                            </span>
                            renewed her
                            <span className='purple-bold-text'>
                              Base Membership
                            </span>
                            Subscription
                          </p>
                        </div>
                      </div>
                      <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                        <div className='position-absolute green-circle'></div>
                        <div className='col-lg-3 col-3'>
                          <span className='font-sm2 f-weight-600'>00 :09</span>
                        </div>
                        <div className='col-lg-9 col-9'>
                          <p className='mb-0 notifs-content font-sm2'>
                            <span className='purple-bold-text'>
                              Farouk Asmaya
                            </span>
                            renewed her
                            <span className='purple-bold-text'>
                              Base Membership
                            </span>
                            Subscription
                          </p>
                        </div>
                      </div>
                      <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                        <div className='position-absolute green-circle'></div>
                        <div className='col-lg-3 col-3'>
                          <span className='font-sm2 f-weight-600'>00 :09</span>
                        </div>
                        <div className='col-lg-9 col-9'>
                          <p className='mb-0 notifs-content font-sm2'>
                            <span className='purple-bold-text'>
                              Farouk Asmaya
                            </span>
                            renewed her
                            <span className='purple-bold-text'>
                              Base Membership
                            </span>
                            Subscription
                          </p>
                        </div>
                      </div>
                      <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                        <div className='position-absolute green-circle'></div>
                        <div className='col-lg-3 col-3'>
                          <span className='font-sm2 f-weight-600'>00 :09</span>
                        </div>
                        <div className='col-lg-9 col-9'>
                          <p className='mb-0 notifs-content font-sm2'>
                            <span className='purple-bold-text'>
                              Farouk Asmaya
                            </span>
                            renewed her
                            <span className='purple-bold-text'>
                              Base Membership
                            </span>
                            Subscription
                          </p>
                        </div>
                      </div>
                      <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                        <div className='position-absolute green-circle'></div>
                        <div className='col-lg-3 col-3'>
                          <span className='font-sm2 f-weight-600'>00 :09</span>
                        </div>
                        <div className='col-lg-9 col-9'>
                          <p className='mb-0 notifs-content font-sm2'>
                            <span className='purple-bold-text'>
                              Farouk Asmaya
                            </span>
                            renewed her
                            <span className='purple-bold-text'>
                              Base Membership
                            </span>
                            Subscription
                          </p>
                        </div>
                      </div>
                      <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                        <div className='position-absolute green-circle'></div>
                        <div className='col-lg-3 col-3'>
                          <span className='font-sm2 f-weight-600'>00 :09</span>
                        </div>
                        <div className='col-lg-9 col-9'>
                          <p className='mb-0 notifs-content font-sm2'>
                            <span className='purple-bold-text'>
                              Farouk Asmaya
                            </span>
                            renewed her
                            <span className='purple-bold-text'>
                              Base Membership
                            </span>
                            Subscription
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {plansPage == "single-2" && (
          <div className='row mt-3 mb-3'>
            <div className='col-lg-6 d-flex flex-column flex-grow-1'>
              <div className='store-analytics-div h-100 mb-0'>
                <div style={{ borderBottom: "1px solid #f2f2f2" }}>
                  <h6
                    className='mb-0 pb-2'
                    style={{ borderBottom: "2px solid #178972", width: "25%" }}
                  >
                    Analytics
                  </h6>
                </div>
                <div className='row mt-4'>
                  <div className='col-lg-4'>
                    <div className='d-flex align-items-center'>
                      <img
                        src='./assets/images/subscribers-icon.svg'
                        className='img-fluid'
                        alt='User'
                      />
                      <div className='ml-3'>
                        <h6 className='font-sm2 f-weight-500'>SUBSCRIBERS</h6>
                        <h6 className='f-weight-600 mb-0'>3200</h6>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4'>
                    <div className='d-flex align-items-center'>
                      <img
                        src='./assets/images/expiring-soon-icon.svg'
                        className='img-fluid'
                        alt='User'
                      />
                      <div className='ml-3'>
                        <h6 className='font-sm2 f-weight-500'>EXPIRING SOON</h6>
                        <h6 className='f-weight-600 mb-0'>320</h6>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4'>
                    <div className='d-flex align-items-center'>
                      <img
                        src='./assets/images/renewed-icon.svg'
                        className='img-fluid'
                        alt='User'
                      />
                      <div className='ml-3'>
                        <h6 className='font-sm2 f-weight-500'>RENEWED</h6>
                        <h6 className='f-weight-600 mb-0'>129</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='users-table-div mt-4'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <h6 className='mb-0'>Yesterday</h6>
                  </div>
                  <div className='activity-timeline position-relative mt-4'>
                    <div
                      className='demarcator position-absolute'
                      style={{
                        width: "2px",
                        height: "100%",
                        top: "0",
                        left: "18%",
                        backgroundColor: "#e6e6e6",
                      }}
                    ></div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>
                            Farouk Asmaya
                          </span>
                          renewed her
                          <span className='purple-bold-text'>
                            Base Membership
                          </span>
                          Subscription
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>
                            Farouk Asmaya
                          </span>
                          renewed her
                          <span className='purple-bold-text'>
                            Base Membership
                          </span>
                          Subscription
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>
                            Farouk Asmaya
                          </span>
                          renewed her
                          <span className='purple-bold-text'>
                            Base Membership
                          </span>
                          Subscription
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>
                            Farouk Asmaya
                          </span>
                          renewed her
                          <span className='purple-bold-text'>
                            Base Membership
                          </span>
                          Subscription
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>
                            Farouk Asmaya
                          </span>
                          renewed her
                          <span className='purple-bold-text'>
                            Base Membership
                          </span>
                          Subscription
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>
                            Farouk Asmaya
                          </span>
                          renewed her
                          <span className='purple-bold-text'>
                            Base Membership
                          </span>
                          Subscription
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>
                            Farouk Asmaya
                          </span>
                          renewed her
                          <span className='purple-bold-text'>
                            Base Membership
                          </span>
                          Subscription
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>
                            Farouk Asmaya
                          </span>
                          renewed her
                          <span className='purple-bold-text'>
                            Base Membership
                          </span>
                          Subscription
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>
                            Farouk Asmaya
                          </span>
                          renewed her
                          <span className='purple-bold-text'>
                            Base Membership
                          </span>
                          Subscription
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>
                            Farouk Asmaya
                          </span>
                          renewed her
                          <span className='purple-bold-text'>
                            Base Membership
                          </span>
                          Subscription
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='users-table-div mt-4'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <h6 className='mb-0'>Yesterday</h6>
                  </div>
                  <div className='activity-timeline position-relative mt-4'>
                    <div
                      className='demarcator position-absolute'
                      style={{
                        width: "2px",
                        height: "100%",
                        top: "0",
                        left: "18%",
                        backgroundColor: "#e6e6e6",
                      }}
                    ></div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>
                            Farouk Asmaya
                          </span>
                          renewed her
                          <span className='purple-bold-text'>
                            Base Membership
                          </span>
                          Subscription
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>
                            Farouk Asmaya
                          </span>
                          renewed her
                          <span className='purple-bold-text'>
                            Base Membership
                          </span>
                          Subscription
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>
                            Farouk Asmaya
                          </span>
                          renewed her
                          <span className='purple-bold-text'>
                            Base Membership
                          </span>
                          Subscription
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>
                            Farouk Asmaya
                          </span>
                          renewed her
                          <span className='purple-bold-text'>
                            Base Membership
                          </span>
                          Subscription
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>
                            Farouk Asmaya
                          </span>
                          renewed her
                          <span className='purple-bold-text'>
                            Base Membership
                          </span>
                          Subscription
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>
                            Farouk Asmaya
                          </span>
                          renewed her
                          <span className='purple-bold-text'>
                            Base Membership
                          </span>
                          Subscription
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>
                            Farouk Asmaya
                          </span>
                          renewed her
                          <span className='purple-bold-text'>
                            Base Membership
                          </span>
                          Subscription
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>
                            Farouk Asmaya
                          </span>
                          renewed her
                          <span className='purple-bold-text'>
                            Base Membership
                          </span>
                          Subscription
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>
                            Farouk Asmaya
                          </span>
                          renewed her
                          <span className='purple-bold-text'>
                            Base Membership
                          </span>
                          Subscription
                        </p>
                      </div>
                    </div>
                    <div className='row mb-3 justify-content-between mb-3 position-relative align-items-center'>
                      <div className='position-absolute green-circle'></div>
                      <div className='col-lg-3 col-3'>
                        <span className='font-sm2 f-weight-600'>00 :09</span>
                      </div>
                      <div className='col-lg-9 col-9'>
                        <p className='mb-0 notifs-content font-sm2'>
                          <span className='purple-bold-text'>
                            Farouk Asmaya
                          </span>
                          renewed her
                          <span className='purple-bold-text'>
                            Base Membership
                          </span>
                          Subscription
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SinglePlan;
