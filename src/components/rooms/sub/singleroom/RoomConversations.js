import React from "react";

const RoomConversations = () => {
  return (
    <div
      className='tab-pane fade show active'
      id='room-conversations'
      role='tabpanel'
      aria-labelledby='room-conversations-tab'
    >
      <div
        className='custom-card d-flex flex-column position-relative'
        style={{ backgroundColor: "#fcf9f9" }}
      >
        <div className='col-md-6 mb-3'>
          <div
            className='chat-box left'
            style={{
              backgroundColor: "rgba(132, 42, 131, 0.45)",
            }}
          >
            <div className='d-flex justify-content-between align-items-start'>
              <div>
                <img
                  className='img-fluid h-75 w-25'
                  src='./assets/images/nusaiba-avatar.svg'
                  alt='talkauthorPic'
                  style={{
                    marginRight: "-10px",
                    marginLeft: "-7px",
                  }}
                />
                <span className='font-sm f-weight-700 w-75 mb-4'>
                  Nusaiba Sabiu
                </span>
              </div>
              <div className='dropdown position-relative mt-2'>
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
                        <rect width='12' height='12' fill='white'></rect>
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
            <div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
                earum recusandae obcaecati quia architecto magni rerum quas,
                repudianda
              </p>
            </div>
          </div>
          <span className='font-sm'>06:34PM</span>
        </div>
        <div className='col-md-6 mb-3'>
          <div
            className='chat-box left'
            style={{ backgroundColor: "rgba(7, 87, 162, 0.4)" }}
          >
            <div className='d-flex justify-content-between align-items-start'>
              <div>
                <img
                  className='img-fluid h-75 w-25'
                  src='./assets/images/nusaiba-avatar.svg'
                  alt='talkauthorPic'
                  style={{
                    marginRight: "-10px",
                    marginLeft: "-7px",
                  }}
                />
                <span className='font-sm f-weight-700 w-75 mb-4'>
                  Nusaiba Sabiu
                </span>
              </div>
              <div className='dropdown position-relative mt-2'>
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
                        <rect width='12' height='12' fill='white'></rect>
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
            <div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
                earum recusandae obcaecati quia architecto magni rerum quas,
                repudianda
              </p>
            </div>
          </div>
          <span className='font-sm'>06:34PM</span>
        </div>
        <div className='col-md-6 mb-3' style={{ alignSelf: "flex-end" }}>
          <div
            className='chat-box right'
            style={{ backgroundColor: "#959595" }}
          >
            <div className='d-flex justify-content-between align-items-start'>
              <div>
                <img
                  className='img-fluid h-75 w-25'
                  src='./assets/images/nusaiba-avatar.svg'
                  alt='talkauthorPic'
                  style={{
                    marginRight: "-10px",
                    marginLeft: "-7px",
                  }}
                />
                <span className='font-sm f-weight-700 w-75 mb-4'>
                  Nusaiba Sabiu
                </span>
              </div>
              <div className='dropdown position-relative mt-2'>
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
                        <rect width='12' height='12' fill='white'></rect>
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
            <div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
                earum recusandae obcaecati quia architecto magni rerum quas,
                repudianda
              </p>
            </div>
          </div>
          <span className='font-sm'>06:34PM</span>
        </div>
        <div className='col-md-6 mb-3'>
          <div
            className='chat-box left'
            style={{
              backgroundColor: "rgba(243, 112, 90, 0.52)",
            }}
          >
            <div className='d-flex justify-content-between align-items-start'>
              <div>
                <img
                  className='img-fluid h-75 w-25'
                  src='./assets/images/nusaiba-avatar.svg'
                  alt='talkauthorPic'
                  style={{
                    marginRight: "-10px",
                    marginLeft: "-7px",
                  }}
                />
                <span className='font-sm f-weight-700 w-75 mb-4'>
                  Nusaiba Sabiu
                </span>
              </div>
              <div className='dropdown position-relative mt-2'>
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
                        <rect width='12' height='12' fill='white'></rect>
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
            <div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
                earum recusandae obcaecati quia architecto magni rerum quas,
                repudianda
              </p>
            </div>
          </div>
          <span className='font-sm'>06:34PM</span>
        </div>
      </div>
    </div>
  );
};

export default RoomConversations;
