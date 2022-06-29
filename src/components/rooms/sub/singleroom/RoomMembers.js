import React from 'react'

const RoomMembers = () => {
  return (
    <div
      className='tab-pane fade show active'
      id='members'
      role='tabpanel'
      aria-labelledby='members-tab'
    >
      <div className='row justify-content-between align-items-center'>
        <div className='col-lg-5 mt-3 mb-3'>
          <div className='d-flex align-items-center'>
            <h5 className='mb-0'>All Members</h5>
            &nbsp;&nbsp;
            <div className='search-user position-relative'>
              <input
                type='text'
                className='search-user-field'
                placeholder='Search'
              />
              <button
                className='btn position-absolute'
                style={{ right: "2px", top: "0" }}
              >
                <img
                  src='./assets/images/searchIcon.svg'
                  style={{ height: "24px", width: "24px" }}
                  alt=''
                />
              </button>
            </div>
          </div>
        </div>
        <div className='col-lg-5 mt-3 mb-3'>
          <div
            className='align-items-center justify-content-end'
            id='users-filter'
          >
            <div className='dropdown messages-dropdown ml-4'>
              <button
                className='btn dropdown-button position-relative'
                type='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
                style={{ width: "auto" }}
              >
                <span className='font-sm'>Sort By</span>
                &nbsp;&nbsp;
                <img src='./assets/images/filter-icon.svg' alt='notification' />
              </button>
              <div
                className='dropdown-menu mt-3'
                aria-labelledby='dropdownMenuButton'
              >
                <div className='position-relative drop-down-menu-inner'>
                  <div className='position-absolute dropdown-pointer'>
                    <i className='fa fa-caret-up'></i>
                  </div>
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
          <div className='align-items-center' id='users-actions'>
            <button className='btn btn-danger'>
              Delete selected &nbsp; &nbsp;
              <img src='./assets/images/delete-icon.svg' alt='delete' />
            </button>
            &nbsp;&nbsp;&nbsp;
            <button className='btn btn-suspend'>
              Suspend selected &nbsp; &nbsp;
              <img src='./assets/images/suspend-icon.svg' alt='delete' />
            </button>
          </div>
        </div>
      </div>
      <div className='users-table-div table-responsive'>
        <table className='table table-borderless users-table'>
          <thead>
            <tr>
              <th colSpan='2'>User name and Avatar</th>
              <th>Email Address</th>
              <th>Location</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.65)",
              }}
            >
              <td colSpan='2'>
                <div className='d-flex justify-content-start'>
                  <img
                    className='img-fluid'
                    src='./assets/images/members-avatar1.svg'
                    alt='members-avatar'
                  />
                  <div className='d-flex flex-column align-items-start'>
                    <h6 className='font-sm f-weight-700 mt-2 ml-5 pl-1'>
                      Farouk Asmaya
                    </h6>
                    <div className='ml-5'>
                      <span className='font-sm w-75 ml-1 mb-4'>
                        Fashion Designer,
                      </span>
                      <span className='font-sm w-75 ml-1 mb-4'>23</span>
                      <img
                        src='./assets/images/verified-icon.svg'
                        alt='verified-icon'
                      />
                    </div>
                  </div>
                </div>
              </td>

              <td>
                <div className='d-flex align-items-center'>
                  <p className='f-weight-700'>retsilo@gmail.com</p>
                </div>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <img src='./assets/images/Location.svg' alt='Location' />
                  <span className='p-2'>Barcelona</span>
                  <img src='./assets/images/usa-flag-icon.svg' alt='' />
                </div>
              </td>
              <td>
                <div className='diamond-status'>
                  <span className='font-xs'>Diamond</span>
                </div>
              </td>
              <td>
                <div className='dropdown position-relative ml-4'>
                  <button
                    className='btn'
                    type='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='true'
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
                          <rect width='12' height='12' fill='white'></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <div
                    className='dropdown-menu mt-3 my---dropdown'
                    aria-labelledby='dropdownMenuButton'
                    x-placement='top-start'
                    style={{
                      position: "absolute",
                      willChange: "transform",
                      top: "0px",
                      left: "0px",
                      transform: "translate3d(-95px, -134px, 0px)",
                    }}
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
              </td>
            </tr>
            <tr
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.65)",
              }}
            >
              <td colSpan='2'>
                <div className='d-flex justify-content-start'>
                  <img
                    className='img-fluid'
                    src='./assets/images/members-avatar2.svg'
                    alt='members-avatar'
                  />
                  <div className='d-flex flex-column align-items-start'>
                    <h6 className='font-sm f-weight-700 mt-2 ml-5 pl-1'>
                      Lira Jediah
                    </h6>
                    <div className='ml-5'>
                      <span className='font-sm w-75 ml-1 mb-4'>Professor,</span>
                      <span className='font-sm w-75 ml-1 mb-4'>40</span>
                      <img
                        src='./assets/images/verified-icon.svg'
                        alt='verified-icon'
                      />
                    </div>
                  </div>
                </div>
              </td>

              <td>
                <div className='d-flex align-items-center'>
                  <p className='f-weight-700'>lira.jediah@gmail.com</p>
                </div>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <img src='./assets/images/Location.svg' alt='Location' />
                  <span className='p-2'>Madrid</span>
                  <img src='./assets/images/benin-flag-icon.svg' alt='' />
                </div>
              </td>
              <td>
                <div className='diamond-status'>
                  <span className='font-xs'>Diamond</span>
                </div>
              </td>
              <td>
                <div className='dropdown position-relative ml-4'>
                  <button
                    className='btn'
                    type='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='true'
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
                          <rect width='12' height='12' fill='white'></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <div
                    className='dropdown-menu mt-3 my---dropdown'
                    aria-labelledby='dropdownMenuButton'
                    x-placement='top-start'
                    style={{
                      position: "absolute",
                      willChange: "transform",
                      top: "0px",
                      left: "0px",
                      transform: "translate3d(-95px, -134px, 0px)",
                    }}
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
              </td>
            </tr>
            <tr
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.65)",
              }}
            >
              <td colSpan='2'>
                <div className='d-flex justify-content-start'>
                  <img
                    className='img-fluid'
                    src='./assets/images/members-avatar3.svg'
                    alt='members-avatar'
                  />
                  <div className='d-flex flex-column align-items-start'>
                    <h6 className='font-sm f-weight-700 mt-2 ml-5 pl-1'>
                      Jennifer Amoku
                    </h6>
                    <div className='ml-5'>
                      <span className='font-sm w-75 ml-1 mb-4'>Educator,</span>
                      <span className='font-sm w-75 ml-1 mb-4'>32</span>
                      <img
                        src='./assets/images/verified-icon.svg'
                        alt='verified-icon'
                      />
                    </div>
                  </div>
                </div>
              </td>

              <td>
                <div className='d-flex align-items-center'>
                  <p className='f-weight-700'>jenniferamoku@gmail.com</p>
                </div>
              </td>

              <td>
                <div className='d-flex align-items-center'>
                  <img src='./assets/images/Location.svg' alt='Location' />
                  <span className='p-2'>Lagos</span>
                  <img src='./assets/images/ivory-coast-flag-icon.svg' alt='' />
                </div>
              </td>
              <td>
                <div className='diamond-status'>
                  <span className='font-xs'>Diamond</span>
                </div>
              </td>
              <td>
                <div className='dropdown position-relative ml-4'>
                  <button
                    className='btn'
                    type='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='true'
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
                          <rect width='12' height='12' fill='white'></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <div
                    className='dropdown-menu mt-3 my---dropdown'
                    aria-labelledby='dropdownMenuButton'
                    x-placement='top-start'
                    style={{
                      position: "absolute",
                      willChange: "transform",
                      top: "0px",
                      left: "0px",
                      transform: "translate3d(-95px, -134px, 0px)",
                    }}
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
              </td>
            </tr>
            <tr
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.65)",
              }}
            >
              <td colSpan='2'>
                <div className='d-flex justify-content-start'>
                  <img
                    className='img-fluid'
                    src='./assets/images/members-avatar4.svg'
                    alt='members-avatar'
                  />
                  <div className='d-flex flex-column align-items-start'>
                    <h6 className='font-sm f-weight-700 mt-2 ml-5 pl-1'>
                      Cecil Jenny
                    </h6>
                    <div className='ml-5'>
                      <span className='font-sm w-75 ml-1 mb-4'>
                        Fashion Model,
                      </span>
                      <span className='font-sm w-75 ml-1 mb-4'>18</span>
                      <img
                        src='./assets/images/verified-icon.svg'
                        alt='verified-icon'
                      />
                    </div>
                  </div>
                </div>
              </td>

              <td>
                <div className='d-flex align-items-center'>
                  <p className='f-weight-700'>cecil19288@yahoo.com</p>
                </div>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <img src='./assets/images/Location.svg' alt='Location' />
                  <span className='p-2'>Bong City</span>
                  <img src='./assets/images/benin-flag-icon.svg' alt='' />
                </div>
              </td>
              <td>
                <div className='verified-status'>
                  <span className='font-xs'>Verified</span>
                </div>
              </td>
              <td>
                <div className='dropdown position-relative ml-4'>
                  <button
                    className='btn'
                    type='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='true'
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
                          <rect width='12' height='12' fill='white'></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <div
                    className='dropdown-menu mt-3 my---dropdown'
                    aria-labelledby='dropdownMenuButton'
                    x-placement='top-start'
                    style={{
                      position: "absolute",
                      willChange: "transform",
                      top: "0px",
                      left: "0px",
                      transform: "translate3d(-95px, -134px, 0px)",
                    }}
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
              </td>
            </tr>
            <tr
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.65)",
              }}
            >
              <td colSpan='2'>
                <div className='d-flex justify-content-start'>
                  <img
                    className='img-fluid'
                    src='./assets/images/members-avatar2.svg'
                    alt='members-avatar'
                  />
                  <div className='d-flex flex-column align-items-start'>
                    <h6 className='font-sm f-weight-700 mt-2 ml-5 pl-1'>
                      Nusaiba Sabiu
                    </h6>
                    <div className='ml-5'>
                      <span className='font-sm w-75 ml-1 mb-4'>Blogger,</span>
                      <span className='font-sm w-75 ml-1 mb-4'>19</span>
                      <img
                        src='./assets/images/verified-icon.svg'
                        alt='verified-icon'
                      />
                    </div>
                  </div>
                </div>
              </td>

              <td>
                <div className='d-flex align-items-center'>
                  <p className='f-weight-700'>nusaiba.sabiu@gmail.com</p>
                </div>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <img src='./assets/images/Location.svg' alt='Location' />
                  <span className='p-2'>Cape Town</span>
                  <img src='./assets/images/usa-flag-icon.svg' alt='' />
                </div>
              </td>
              <td>
                <div className='diamond-status'>
                  <span className='font-xs'>Diamond</span>
                </div>
              </td>
              <td>
                <div className='dropdown position-relative ml-4'>
                  <button
                    className='btn'
                    type='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='true'
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
                          <rect width='12' height='12' fill='white'></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <div
                    className='dropdown-menu mt-3 my---dropdown'
                    aria-labelledby='dropdownMenuButton'
                    x-placement='top-start'
                    style={{
                      position: "absolute",
                      willChange: "transform",
                      top: "0px",
                      left: "0px",
                      transform: "translate3d(-95px, -134px, 0px)",
                    }}
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
              </td>
            </tr>
            <tr
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.65)",
              }}
            >
              <td colSpan='2'>
                <div className='d-flex justify-content-start'>
                  <img
                    className='img-fluid'
                    src='./assets/images/members-avatar1.svg'
                    alt='members-avatar'
                  />
                  <div className='d-flex flex-column align-items-start'>
                    <h6 className='font-sm f-weight-700 mt-2 ml-5 pl-1'>
                      Melody Jacob
                    </h6>
                    <div className='ml-5'>
                      <span className='font-sm w-75 ml-1 mb-4'>Youtuber,</span>
                      <span className='font-sm w-75 ml-1 mb-4'>30</span>
                      <img
                        src='./assets/images/verified-icon.svg'
                        alt='verified-icon'
                      />
                    </div>
                  </div>
                </div>
              </td>

              <td>
                <div className='d-flex align-items-center'>
                  <p className='f-weight-700'>melodyj@yahoo.com</p>
                </div>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <img src='./assets/images/Location.svg' alt='Location' />
                  <span className='p-2'>Barcelona</span>
                  <img src='./assets/images/usa-flag-icon.svg' alt='' />
                </div>
              </td>
              <td>
                <div className='verified-status'>
                  <span className='font-xs'>Verified</span>
                </div>
              </td>
              <td>
                <div className='dropdown position-relative ml-4'>
                  <button
                    className='btn'
                    type='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='true'
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
                          <rect width='12' height='12' fill='white'></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <div
                    className='dropdown-menu mt-3 my---dropdown'
                    aria-labelledby='dropdownMenuButton'
                    x-placement='top-start'
                    style={{
                      position: "absolute",
                      willChange: "transform",
                      top: "0px",
                      left: "0px",
                      transform: "translate3d(-95px, -134px, 0px)",
                    }}
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
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RoomMembers