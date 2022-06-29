import React from 'react'

const SubmittedProfilesNav = () => {
  return (
        <div
            className="tab-pane fade show active"
            id="about"
            role="tabpanel"
            aria-labelledby="about-tab"
        >
            <div className="users-table-div table-responsive">
                <table className="table table-borderless users-table">
                    <thead>
                        <tr>
                            <th colSpan="2">User name and avatar</th>
                            <th>Email address</th>
                            <th>Location</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{backgroundColor: 'white'}}>
                            <td colSpan="2">
                                <div className="d-flex align-items-center">
                                    <img
                                        src="./assets/images/user-avatar.svg"
                                        alt=""
                                    />
                                    <div>
                                        <h6>Farouq Asmaya</h6>
                                        <span
                                            >YouTuber &nbsp;&nbsp; 27 &nbsp;&nbsp;
                                            <img
                                                src="./assets/images/Verified-user.svg"
                                                alt="Verified"
                                        /></span>
                                    </div>
                                </div>
                            </td>
                            <td>farouk.asm@smail.com</td>
                            <td>
                                <span
                                    ><img
                                        src="./assets/images/Location.svg"
                                        alt="Location" />&nbsp;&nbsp; Serria leaone
                                    &nbsp;&nbsp;
                                    <img
                                        src="./assets/images/CountryFlag.svg"
                                        alt="Flag"
                                /></span>
                            </td>
                            <td><div className="diamond-status">Diamond</div></td>
                            <td>
                                <div className="dropdown position-relative ml-4">
                                    <button
                                        className="btn"
                                        type="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_1251_27914)">
                                                <path
                                                    d="M7.06065 0.439338C7.64643 1.02512 7.64643 1.97487 7.06065 2.56066C6.47487 3.14644 5.52512 3.14644 4.93934 2.56066C4.35355 1.97487 4.35355 1.02512 4.93934 0.439338C5.5251 -0.146446 6.47484 -0.146446 7.06065 0.439338Z"
                                                    fill="black"
                                                ></path>
                                                <path
                                                    d="M7.06065 4.93934C7.64643 5.52512 7.64643 6.47487 7.06065 7.06065C6.47487 7.64643 5.52512 7.64643 4.93934 7.06065C4.35355 6.47487 4.35355 5.52512 4.93934 4.93934C5.5251 4.35355 6.47484 4.35355 7.06065 4.93934Z"
                                                    fill="black"
                                                ></path>
                                                <path
                                                    d="M7.06065 9.43934C7.64643 10.0251 7.64643 10.9749 7.06065 11.5607C6.47487 12.1464 5.52512 12.1464 4.93934 11.5607C4.35355 10.9749 4.35355 10.0251 4.93934 9.43934C5.5251 8.85355 6.47484 8.85355 7.06065 9.43934Z"
                                                    fill="black"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1251_27914">
                                                    <rect
                                                        width="12"
                                                        height="12"
                                                        fill="white"
                                                    ></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </button>
                                    <div
                                        className="dropdown-menu mt-3"
                                        aria-labelledby="dropdownMenuButton"
                                    >
                                        <div className="drop-down-menu-inner">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#"
                                                >Another action</a
                                            >
                                            <a className="dropdown-item" href="#"
                                                >Something else here</a
                                            >
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
<tr style={{ backgroundColor: '#f7f5fa' }}>
                            <td colSpan="2">
                                <div className="d-flex align-items-center">
                                    <img
                                        src="./assets/images/user-avatar.svg"
                                        alt=""
                                    />
                                    <div>
                                        <h6>Melody Jacob</h6>
                                        <span
                                            >YouTuber &nbsp;&nbsp; 28 &nbsp;&nbsp;
                                            <img
                                                src="./assets/images/Verified-user.svg"
                                                alt="Verified"
                                        /></span>
                                    </div>
                                </div>
                            </td>
                            <td>farouk.asm@smail.com</td>
                            <td>
                                <span
                                    ><img
                                        src="./assets/images/Location.svg"
                                        alt="Location" />&nbsp;&nbsp; Serria leaone
                                    &nbsp;&nbsp;
                                    <img
                                        src="./assets/images/CountryFlag.svg"
                                        alt="Flag"
                                /></span>
                            </td>
                            <td><div className="pending-status">Pending</div></td>
                            <td>
                                <div className="dropdown position-relative ml-4">
                                    <button
                                        className="btn"
                                        type="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_1251_27914)">
                                                <path
                                                    d="M7.06065 0.439338C7.64643 1.02512 7.64643 1.97487 7.06065 2.56066C6.47487 3.14644 5.52512 3.14644 4.93934 2.56066C4.35355 1.97487 4.35355 1.02512 4.93934 0.439338C5.5251 -0.146446 6.47484 -0.146446 7.06065 0.439338Z"
                                                    fill="black"
                                                ></path>
                                                <path
                                                    d="M7.06065 4.93934C7.64643 5.52512 7.64643 6.47487 7.06065 7.06065C6.47487 7.64643 5.52512 7.64643 4.93934 7.06065C4.35355 6.47487 4.35355 5.52512 4.93934 4.93934C5.5251 4.35355 6.47484 4.35355 7.06065 4.93934Z"
                                                    fill="black"
                                                ></path>
                                                <path
                                                    d="M7.06065 9.43934C7.64643 10.0251 7.64643 10.9749 7.06065 11.5607C6.47487 12.1464 5.52512 12.1464 4.93934 11.5607C4.35355 10.9749 4.35355 10.0251 4.93934 9.43934C5.5251 8.85355 6.47484 8.85355 7.06065 9.43934Z"
                                                    fill="black"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1251_27914">
                                                    <rect
                                                        width="12"
                                                        height="12"
                                                        fill="white"
                                                    ></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </button>
                                    <div
                                        className="dropdown-menu mt-3"
                                        aria-labelledby="dropdownMenuButton"
                                    >
                                        <div className="drop-down-menu-inner">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#"
                                                >Another action</a
                                            >
                                            <a className="dropdown-item" href="#"
                                                >Something else here</a
                                            >
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr style={{backgroundColor: 'white'}}>
                            <td colSpan="2">
                                <div className="d-flex align-items-center">
                                    <img
                                        src="./assets/images/user-avatar.svg"
                                        alt=""
                                    />
                                    <div>
                                        <h6>Farouq Asmaya</h6>
                                        <span
                                            >YouTuber &nbsp;&nbsp; 27 &nbsp;&nbsp;
                                            <img
                                                src="./assets/images/Verified-user.svg"
                                                alt="Verified"
                                        /></span>
                                    </div>
                                </div>
                            </td>
                            <td>farouk.asm@smail.com</td>
                            <td>
                                <span
                                    ><img
                                        src="./assets/images/Location.svg"
                                        alt="Location" />&nbsp;&nbsp; Serria leaone
                                    &nbsp;&nbsp;
                                    <img
                                        src="./assets/images/CountryFlag.svg"
                                        alt="Flag"
                                /></span>
                            </td>
                            <td><div className="verified-status">Verified</div></td>
                            <td>
                                <div className="dropdown position-relative ml-4">
                                    <button
                                        className="btn"
                                        type="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_1251_27914)">
                                                <path
                                                    d="M7.06065 0.439338C7.64643 1.02512 7.64643 1.97487 7.06065 2.56066C6.47487 3.14644 5.52512 3.14644 4.93934 2.56066C4.35355 1.97487 4.35355 1.02512 4.93934 0.439338C5.5251 -0.146446 6.47484 -0.146446 7.06065 0.439338Z"
                                                    fill="black"
                                                ></path>
                                                <path
                                                    d="M7.06065 4.93934C7.64643 5.52512 7.64643 6.47487 7.06065 7.06065C6.47487 7.64643 5.52512 7.64643 4.93934 7.06065C4.35355 6.47487 4.35355 5.52512 4.93934 4.93934C5.5251 4.35355 6.47484 4.35355 7.06065 4.93934Z"
                                                    fill="black"
                                                ></path>
                                                <path
                                                    d="M7.06065 9.43934C7.64643 10.0251 7.64643 10.9749 7.06065 11.5607C6.47487 12.1464 5.52512 12.1464 4.93934 11.5607C4.35355 10.9749 4.35355 10.0251 4.93934 9.43934C5.5251 8.85355 6.47484 8.85355 7.06065 9.43934Z"
                                                    fill="black"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1251_27914">
                                                    <rect
                                                        width="12"
                                                        height="12"
                                                        fill="white"
                                                    ></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </button>
                                    <div
                                        className="dropdown-menu mt-3"
                                        aria-labelledby="dropdownMenuButton"
                                    >
                                        <div className="drop-down-menu-inner">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#"
                                                >Another action</a
                                            >
                                            <a className="dropdown-item" href="#"
                                                >Something else here</a
                                            >
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr style={{backgroundColor: 'white'}}>
                            <td colSpan="2">
                                <div className="d-flex align-items-center">
                                    <img
                                        src="./assets/images/user-avatar.svg"
                                        alt=""
                                    />
                                    <div>
                                        <h6>Farouq Asmaya</h6>
                                        <span
                                            >YouTuber &nbsp;&nbsp; 27 &nbsp;&nbsp;
                                            <img
                                                src="./assets/images/Verified-user.svg"
                                                alt="Verified"
                                        /></span>
                                    </div>
                                </div>
                            </td>
                            <td>farouk.asm@smail.com</td>
                            <td>
                                <span
                                    ><img
                                        src="./assets/images/Location.svg"
                                        alt="Location" />&nbsp;&nbsp; Serria leaone
                                    &nbsp;&nbsp;
                                    <img
                                        src="./assets/images/CountryFlag.svg"
                                        alt="Flag"
                                /></span>
                            </td>
                            <td><div className="gold-status">Gold</div></td>
                            <td>
                                <div className="dropdown position-relative ml-4">
                                    <button
                                        className="btn"
                                        type="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_1251_27914)">
                                                <path
                                                    d="M7.06065 0.439338C7.64643 1.02512 7.64643 1.97487 7.06065 2.56066C6.47487 3.14644 5.52512 3.14644 4.93934 2.56066C4.35355 1.97487 4.35355 1.02512 4.93934 0.439338C5.5251 -0.146446 6.47484 -0.146446 7.06065 0.439338Z"
                                                    fill="black"
                                                ></path>
                                                <path
                                                    d="M7.06065 4.93934C7.64643 5.52512 7.64643 6.47487 7.06065 7.06065C6.47487 7.64643 5.52512 7.64643 4.93934 7.06065C4.35355 6.47487 4.35355 5.52512 4.93934 4.93934C5.5251 4.35355 6.47484 4.35355 7.06065 4.93934Z"
                                                    fill="black"
                                                ></path>
                                                <path
                                                    d="M7.06065 9.43934C7.64643 10.0251 7.64643 10.9749 7.06065 11.5607C6.47487 12.1464 5.52512 12.1464 4.93934 11.5607C4.35355 10.9749 4.35355 10.0251 4.93934 9.43934C5.5251 8.85355 6.47484 8.85355 7.06065 9.43934Z"
                                                    fill="black"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1251_27914">
                                                    <rect
                                                        width="12"
                                                        height="12"
                                                        fill="white"
                                                    ></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </button>
                                    <div
                                        className="dropdown-menu mt-3"
                                        aria-labelledby="dropdownMenuButton"
                                    >
                                        <div className="drop-down-menu-inner">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#"
                                                >Another action</a
                                            >
                                            <a className="dropdown-item" href="#"
                                                >Something else here</a
                                            >
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
<tr style={{ backgroundColor: 'white', opacity: '0.5' }}>
                            <td colSpan="2">
                                <div className="d-flex align-items-center">
                                    <img
                                        src="./assets/images/user-avatar.svg"
                                        alt=""
                                    />
                                    <div>
                                        <h6>Farouq Asmaya</h6>
                                        <span
                                            >YouTuber &nbsp;&nbsp; 27 &nbsp;&nbsp;
                                            <img
                                                src="./assets/images/Verified-user.svg"
                                                alt="Verified"
                                        /></span>
                                    </div>
                                </div>
                            </td>
                            <td>farouk.asm@smail.com</td>
                            <td>
                                <span
                                    ><img
                                        src="./assets/images/Location.svg"
                                        alt="Location" />&nbsp;&nbsp; Serria leaone
                                    &nbsp;&nbsp;
                                    <img
                                        src="./assets/images/CountryFlag.svg"
                                        alt="Flag"
                                /></span>
                            </td>
                            <td>
<div className="suspended-status" style={{ opacity: '1' }}>
                                    Suspended
                                </div>
                            </td>
                            <td>
                                <div className="dropdown position-relative ml-4">
                                    <button
                                        className="btn"
                                        type="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_1251_27914)">
                                                <path
                                                    d="M7.06065 0.439338C7.64643 1.02512 7.64643 1.97487 7.06065 2.56066C6.47487 3.14644 5.52512 3.14644 4.93934 2.56066C4.35355 1.97487 4.35355 1.02512 4.93934 0.439338C5.5251 -0.146446 6.47484 -0.146446 7.06065 0.439338Z"
                                                    fill="black"
                                                ></path>
                                                <path
                                                    d="M7.06065 4.93934C7.64643 5.52512 7.64643 6.47487 7.06065 7.06065C6.47487 7.64643 5.52512 7.64643 4.93934 7.06065C4.35355 6.47487 4.35355 5.52512 4.93934 4.93934C5.5251 4.35355 6.47484 4.35355 7.06065 4.93934Z"
                                                    fill="black"
                                                ></path>
                                                <path
                                                    d="M7.06065 9.43934C7.64643 10.0251 7.64643 10.9749 7.06065 11.5607C6.47487 12.1464 5.52512 12.1464 4.93934 11.5607C4.35355 10.9749 4.35355 10.0251 4.93934 9.43934C5.5251 8.85355 6.47484 8.85355 7.06065 9.43934Z"
                                                    fill="black"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1251_27914">
                                                    <rect
                                                        width="12"
                                                        height="12"
                                                        fill="white"
                                                    ></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </button>
                                    <div
                                        className="dropdown-menu mt-3"
                                        aria-labelledby="dropdownMenuButton"
                                    >
                                        <div className="drop-down-menu-inner">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#"
                                                >Another action</a
                                            >
                                            <a className="dropdown-item" href="#"
                                                >Something else here</a
                                            >
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
<tr style={{ backgroundColor: '#f7f5fa' }}>
                            <td colSpan="2">
                                <div className="d-flex align-items-center">
                                    <img
                                        src="./assets/images/user-avatar.svg"
                                        alt=""
                                    />
                                    <div>
                                        <h6>Melody Jacob</h6>
                                        <span
                                            >YouTuber &nbsp;&nbsp; 28 &nbsp;&nbsp;
                                            <img
                                                src="./assets/images/Verified-user.svg"
                                                alt="Verified"
                                        /></span>
                                    </div>
                                </div>
                            </td>
                            <td>farouk.asm@smail.com</td>
                            <td>
                                <span
                                    ><img
                                        src="./assets/images/Location.svg"
                                        alt="Location" />&nbsp;&nbsp; Serria leaone
                                    &nbsp;&nbsp;
                                    <img
                                        src="./assets/images/CountryFlag.svg"
                                        alt="Flag"
                                /></span>
                            </td>
                            <td><div className="pending-status">Pending</div></td>
                            <td>
                                <div className="dropdown position-relative ml-4">
                                    <button
                                        className="btn"
                                        type="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_1251_27914)">
                                                <path
                                                    d="M7.06065 0.439338C7.64643 1.02512 7.64643 1.97487 7.06065 2.56066C6.47487 3.14644 5.52512 3.14644 4.93934 2.56066C4.35355 1.97487 4.35355 1.02512 4.93934 0.439338C5.5251 -0.146446 6.47484 -0.146446 7.06065 0.439338Z"
                                                    fill="black"
                                                ></path>
                                                <path
                                                    d="M7.06065 4.93934C7.64643 5.52512 7.64643 6.47487 7.06065 7.06065C6.47487 7.64643 5.52512 7.64643 4.93934 7.06065C4.35355 6.47487 4.35355 5.52512 4.93934 4.93934C5.5251 4.35355 6.47484 4.35355 7.06065 4.93934Z"
                                                    fill="black"
                                                ></path>
                                                <path
                                                    d="M7.06065 9.43934C7.64643 10.0251 7.64643 10.9749 7.06065 11.5607C6.47487 12.1464 5.52512 12.1464 4.93934 11.5607C4.35355 10.9749 4.35355 10.0251 4.93934 9.43934C5.5251 8.85355 6.47484 8.85355 7.06065 9.43934Z"
                                                    fill="black"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1251_27914">
                                                    <rect
                                                        width="12"
                                                        height="12"
                                                        fill="white"
                                                    ></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </button>
                                    <div
                                        className="dropdown-menu mt-3"
                                        aria-labelledby="dropdownMenuButton"
                                    >
                                        <div className="drop-down-menu-inner">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#"
                                                >Another action</a
                                            >
                                            <a className="dropdown-item" href="#"
                                                >Something else here</a
                                            >
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default SubmittedProfilesNav