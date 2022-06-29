import React, { useState } from 'react'
import Gifts from './Gifts';
import About from './About';
import Activities from './Activities';
import Boosts from './Boosts';
import TransactionHistory from './TransactionHistory';
import More from './More';

const SingleUser = () => {
    const [activeTab, setActiveTab] = useState('activities');
    const [showDropDown, setShowDropDown] = useState(false);
  return (
        <div className="main-content">
            <div className="container-fluid">
                <div className="row">
                <div className="col-12 mt-5 mb-3">
                    <ul className="myBreadcrumb p-0">
                        <li>
                            <a href="#" className="d-flex align-items-center"
                                ><i className="fa fa-home text-darkGrey"></i
                                ><span className="font-xs pl-2 f-weight-500 mt-1 text-dark"
                                    >Home</span
                                ></a
                            >
                        </li>
                        <li className="">
                            <a href="#" className="d-flex align-items-center"
                                ><span className="font-xs f-weight-500 mt-1 text-dark"
                                    >User management</span
                                ></a
                            >
                        </li>
                        <li className="active">
                            <a href="#" className="d-flex align-items-center"
                                ><span className="font-xs f-weight-500 mt-1 text-dark"
                                    >Farouk Asmaya</span
                                ></a
                            >
                        </li>
                    </ul>
                </div>
                </div>
                <div className="row mt-3">
		            <div className="col-xl-12 col-12 mb-3">
                        <div className="custom-card pb-0 p-0">
                            <div className="row justify-content-around align-items-center">
                                <div className="col-lg-6 py-3">
                                    <div className="d-flex align-items-center">
                                        <div className="user-profile-picture">
                                            <img
                                                src="./assets/images/profile-pic.svg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                        &nbsp;&nbsp;
                                        <div>
                                            <h4 className="f-weight-600">
                                                Farouk Asmaya, &nbsp;&nbsp; 23 &nbsp;&nbsp;
                                                <img
                                                    src="./assets/images/Verified-user.svg"
                                                    alt="Verified"
                                                />
                                            </h4>
                                            <h6 className="f-weight-600 font-sm2">Blogger</h6>
                                            <span className="font-sm2"
                                                ><img
                                                    src="./assets/images/Location.svg"
                                                    alt="Location" />&nbsp;&nbsp; Serria leaone
                                                &nbsp;&nbsp;
                                                <img src="./assets/images/CountryFlag.svg" alt="Flag"
                                            /></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 py-3">
                                    <div className="user-profile-wallet position-relative">
                                        <div
                                            className="d-flex justify-content-between align-items-center"
                                        >
                                            <div className="d-flex align-items-center">
                                                <div className="white-circle">
                                                    <img
                                                        src="./assets/images/walletIcon.svg"
                                                        className="img-fluid"
                                                        alt="wallet"
                                                    />
                                                </div>
                                                &nbsp;&nbsp;
                                                <div>
                                                    <p className="text-light mb-0 font-sm2">
                                                        Current Wallet Balance
                                                    </p>
                                                </div>
                                            </div>
                                            <span className="text-light">₦</span>
                                        </div>
                                        <div className="px-2 mt-3">
                                            <div className="row align-items-center">
                                                <div className="col-6">
                                                    <h5 className="text-light f-weight-600 mb-3">
                                                        29,489,394
                                                    </h5>
                                                    <p className="text-light font-sm2 mb-0">₦43,570.89</p>
                                                </div>
                                                <div className="col-6 d-flex flex-column align-items-end">
                                                    <span className="text-light f-weight-600 mb-3"
                                                        ><img
                                                            src="./assets/images/gift-icon.svg"
                                                            className="img-fluid"
                                                            alt="gift"
                                                        />&nbsp;&nbsp;6 Gifts</span
                                                    >
                                                    <p className="text-light font-sm2 mb-0">29,934</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-lg-12">
                                    <div className="profile-menu-tabs">
                                        <div className="row justify-content-between">
                                            <div className="col-lg-8">
                                                <ul className="nav nav-pills profile-pills" id="myTab" role="tablist">
                                                    <li className="nav-item" role="presentation" onClick={()=> setActiveTab('activities')}>
                                                        <a className={`nav-link ${activeTab == 'activities' && 'active'}`} id="activities-tab" data-toggle="tab" href="#activities" role="tab" aria-controls="activities" aria-selected="true" >Activities </a>
                                                    </li>
                                                    <li className="nav-item" role="presentation" onClick={()=> setActiveTab('about')}>
                                                        <a className={`nav-link ${activeTab == 'about' && 'active'}`} id="about-tab" data-toggle="tab" href="#about" role="tab" aria-controls="about" aria-selected="false" >About</a>
                                                    </li>
                                                    <li className="nav-item" role="presentation" onClick={()=> setActiveTab('trans-history')}>
                                                        <a className={`nav-link ${activeTab == 'trans-history' && 'active'}`} id="transaction-history-tab" data-toggle="tab" href="#transaction-history" role="tab" aria-controls="transaction-history" aria-selected="false" >Transaction History</a>
                                                    </li>
                                                    <li className="nav-item" role="presentation" onClick={()=> setActiveTab('boosts')}>
                                                        <a className={`nav-link ${activeTab == 'boosts' && 'active'}`} id="boosts-tab" data-toggle="tab" href="#boosts" role="tab" aria-controls="boosts" aria-selected="false" >Boosts</a>
                                                    </li>
                                                    <li className="nav-item" role="presentation" onClick={()=> setActiveTab('gifts')}>
                                                        <a className={`nav-link ${activeTab == 'gifts' && 'active'}`} id="gifts-tab" data-toggle="tab" href="#gifts" role="tab" aria-controls="gifts" aria-selected="false" >Gifts</a>
                                                    </li>
                                                    <li className="nav-item" role="presentation" onClick={()=> setActiveTab('more')}>
                                                        <a className={`nav-link ${activeTab == 'more' && 'active'}`} id="more-tab" data-toggle="tab" href="#more" role="tab" aria-controls="more" aria-selected="false" >More</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-2">
                                                <div className="d-flex justify-content-end">
                                                    <div className="dropdown position-relative ml-4" onClick={()=> setShowDropDown(!showDropDown)}>
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
                                                          className={`dropdown-menu mt-3 my---dropdown ${showDropDown && 'block'}`}
                                                          aria-labelledby="dropdownMenuButton"
                                                          id='single-user-drop'
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
            <div className="row">
			    <div className="col-12 mb-3">
					<div className="custom-card py-0">
                        <div className="tab-content" id="myTabContent">
                            {activeTab == 'activities' && <Activities />}
                            {activeTab == 'about'  && <About />}
                            {activeTab == 'trans-history'  && <TransactionHistory />}
                            {activeTab == 'boosts'  && <Boosts />}
                            {activeTab == 'gifts'  && <Gifts />}
                            {activeTab == 'more'  && <More />}
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
  )
}

export default SingleUser