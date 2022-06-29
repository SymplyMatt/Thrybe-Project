import React, { useState } from "react";
import RoomConversations from "./RoomConversations";
import RoomDescAndRules from "./RoomDescAndRules";
import RoomMembers from "./RoomMembers";

const SingleRoom = () => {
  const [singlePage, setSinglePage] = useState("convo");

  return (
    <div className='main-content'>
      <div className='container-fluid'>
        {/* breadcrumb */}
        <div className='row'>
          <div className='col-12 mt-5 mb-3'>
            <ul className='myBreadcrumb p-0'>
              <li>
                <a href='#' className='d-flex align-items-center'>
                  <i className='fa fa-home text-darkGrey'></i>
                  <span className='font-xs pl-2 f-weight-500 mt-1 text-dark'>
                    Home
                  </span>
                </a>
              </li>
              <li className=''>
                <a href='#' className='d-flex align-items-center'>
                  <span className='font-xs f-weight-500 mt-1 text-dark'>
                    User management
                  </span>
                </a>
              </li>
              <li className='active'>
                <a href='#' className='d-flex align-items-center'>
                  <span className='font-xs f-weight-500 mt-1 text-dark'>
                    Beautiful women lounge
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* page title and nav */}
        <div className='row mt-3'>
          <div className='col-xl-12 col-12 mb-3'>
            <div className='custom-card pb-0 p-0'>
              <div className='row justify-content-start align-items-center pl-3'>
                <div className='col-xl-4 col-lg-6 py-3'>
                  <img
                    className='img-fluid'
                    src='./assets/images/singleroomavatar.svg'
                    alt=''
                  />
                </div>
                <div className='col-lg-6 pt-5'>
                  <h4 className='f-weight-700'>Beautiful Women Lounge</h4>
                  <p className='mb-0'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi ipsam doloremque similique sequi quis! Totam aperiam
                    possimus incidunt laboriosam nisi a mollitia, ea vel
                    repellendus cumque aspernatur optio fugiat quos.
                  </p>
                  <div className='d-flex talk-authors mb-3 mr-5'>
                    <div className='pt-1 mr-3'>
                      <img
                        src='./assets/images/author-pic.svg'
                        alt='talkauthorPic'
                        className='h-100'
                        style={{ marginLeft: "-23px" }}
                      />
                      <span className='font-sm f-weight-600'>
                        Author - Rest SILO
                      </span>
                    </div>
                    <div className='pt-4 mr-3'>
                      <img
                        src='./assets/images/calender-icon.svg'
                        alt='calendar'
                        className='h-25 pr-2'
                      />
                      <span className='font-sm f-weight-600'>
                        05.01.2020 01:39PM
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row mt-4'>
                <div className='col-lg-12'>
                  <div className='profile-menu-tabs'>
                    <div className='row justify-content-between'>
                      <div className='col-lg-8'>
                        <ul
                          className='nav nav-pills profile-pills'
                          id='myTab'
                          role='tablist'
                        >
                          <li
                            className='nav-item'
                            role='presentation'
                            onClick={(e) => {
                              e.preventDefault();
                              setSinglePage("convo");
                            }}
                          >
                            <a
                              className={`nav-link ${
                                singlePage == "convo" && "active"
                              }`}
                              id='room-conversations-tab'
                              data-toggle='tab'
                              href='#room-conversations'
                              role='tab'
                              aria-controls='room-conversations'
                              aria-selected='true'
                            >
                              Room Conversations
                            </a>
                          </li>
                          <li
                            className='nav-item'
                            role='presentation'
                            onClick={(e) => {
                              e.preventDefault();
                              setSinglePage("members");
                            }}
                          >
                            <a
                              className={`nav-link ${
                                singlePage == "members" && "active"
                              }`}
                              id='members-tab'
                              data-toggle='tab'
                              href='#members'
                              role='tab'
                              aria-controls='members'
                              aria-selected='false'
                            >
                              Members
                            </a>
                          </li>
                          <li
                            className='nav-item'
                            role='presentation'
                            onClick={(e) => {
                              e.preventDefault();
                              setSinglePage("desc");
                            }}
                          >
                            <a
                              className={`nav-link ${
                                singlePage == "desc" && "active"
                              }`}
                              id='description-rules-tab'
                              data-toggle='tab'
                              href='#description-rules'
                              role='tab'
                              aria-controls='description-rules'
                              aria-selected='false'
                            >
                              Description and rules
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className='col-lg-2'>
                        <div className='d-flex justify-content-end'>
                          <div className='dropdown position-relative ml-4'>
                            <button
                              className='btn'
                              type='button'
                              data-toggle='dropdown'
                              aria-haspopup='true'
                              aria-expanded='false'
                            >
                              <svg
                                width='12'
                                height='12'
                                viewBox='0 0 12 12'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <g clipPath='url(#clip0_1251_27914)'>
                                  <path
                                    d='M7.06065 0.439338C7.64643 1.02512 7.64643 1.97487 7.06065 2.56066C6.47487 3.14644 5.52512 3.14644 4.93934 2.56066C4.35355 1.97487 4.35355 1.02512 4.93934 0.439338C5.5251 -0.146446 6.47484 -0.146446 7.06065 0.439338Z'
                                    fill='black'
                                  ></path>
                                  <path
                                    d='M7.06065 4.93934C7.64643 5.52512 7.64643 6.47487 7.06065 7.06065C6.47487 7.64643 5.52512 7.64643 4.93934 7.06065C4.35355 6.47487 4.35355 5.52512 4.93934 4.93934C5.5251 4.35355 6.47484 4.35355 7.06065 4.93934Z'
                                    fill='black'
                                  ></path>
                                  <path
                                    d='M7.06065 9.43934C7.64643 10.0251 7.64643 10.9749 7.06065 11.5607C6.47487 12.1464 5.52512 12.1464 4.93934 11.5607C4.35355 10.9749 4.35355 10.0251 4.93934 9.43934C5.5251 8.85355 6.47484 8.85355 7.06065 9.43934Z'
                                    fill='black'
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id='clip0_1251_27914'>
                                    <rect
                                      width='12'
                                      height='12'
                                      fill='white'
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                            </button>
                            <div
                              className='dropdown-menu mt-3 my---dropdown'
                              aria-labelledby='dropdownMenuButton'
                            >
                              <div className='drop-down-menu-inner'>
                                <a className='dropdown-item' href='#'>
                                  Action
                                </a>
                                <a className='dropdown-item' href='#'>
                                  Another action
                                </a>
                                <a className='dropdown-item' href='#'>
                                  Something else here
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-12 mb-3'>
            <div className='custom-card py-3'>
              <div className='tab-content' id='myTabContent'>
                {singlePage == "convo" && <RoomConversations />}
                {singlePage == "members" && <RoomMembers />}
                {singlePage == "desc" && <RoomDescAndRules />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRoom;
