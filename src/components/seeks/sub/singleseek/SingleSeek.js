import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AboutSingleSeekNav from './AboutSingleSeekNav';
import SubmittedProfilesNav from './SubmittedProfilesNav';


const SingleSeek = ({ setPage, setSeeksPage }) => {
  const navigate = useNavigate();
  const [activeNav, setActiveNav]= useState('about')
  return (
      <div className="main-content">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12 mt-5 mb-3">
							<ul className="myBreadcrumb p-0">
              <li onClick={(e) => {
                e.preventDefault();
                  setPage('login');
                  navigate('/');
                }}>
									<a href="#" className="d-flex align-items-center"
										><i className="fa fa-home text-darkGrey"></i
										><span className="font-xs pl-2 f-weight-500 mt-1 text-dark"
											>Home</span
										></a
									>
								</li>
								<li className="" onClick={(e) => {
                e.preventDefault();
                  setSeeksPage('seeks');
                }}>
									<a href="#" className="d-flex align-items-center"
										><span className="font-xs f-weight-500 mt-1 text-dark"
											>Thrybe Seek</span
										></a
									>
								</li>
								<li className="active">
									<a href="#" className="d-flex align-items-center"
										><span className="font-xs f-weight-500 mt-1 text-dark"
											>I am seeking a bright and intelligent woman</span
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
									<div className="col-12">
										<div className="px-5 pt-5 pb-2">
											<h1 className="f-weight-600">
												I am seeking a bright and intelligent woman
											</h1>

											<p className="mt-3 font-sm2">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Praesent volutpat, quam eu scelerisque vestibulum, nulla
												magna gravida risus, vitae rhoncus libero lectus et
												dolor. Donec elementum magna ac dui imperdiet luctus.
												Phasellus mattis libero metus, ac scelerisque augue
												tempor ac.
											</p>
											<div className="d-flex align-items-center mt-4 flex-wrap">
												<span className="talks-author"
													><img
														src="./assets/images/user-avatar.svg"
														alt=""
													/>&nbsp;&nbsp;Author - Farouk Asmaya</span
												>
												<div className="successful-status ml-4 font-sm h-26 px-2">
													Active
												</div>
												<span className="talks-author text-darkGrey ml-5"
													><i className="fa fa-clock-o text-dark font-sm2"></i
													>&nbsp;&nbsp;1 Month</span
												>
												<span className="talks-author text-darkGrey ml-5"
													><img
                          src="./assets/images/calender-icon.svg"
                          alt=""
                          style={{ height: '14px', width: '14px' }}
													/>&nbsp;&nbsp;05.01.2020 &nbsp;&nbsp; 01:39 PM</span
												>
												<span className="talks-author text-darkGrey ml-5"
													><img
														src="./assets/images/token-icon.svg"
														alt=""
													/>&nbsp;&nbsp;750 Tokens</span
												>
											</div>
										</div>
									</div>
								</div>
								<div className="row mt-4">
									<div className="col-lg-12">
										<div className="profile-menu-tabs">
											<div className="row justify-content-between">
												<div className="col-lg-8">
													<ul
														className="nav nav-pills profile-pills"
														id="myTab"
														role="tablist"
													>
														<li className="nav-item" role="presentation" onClick={()=>setActiveNav('about')}>
															<a
																className={`nav-link ${activeNav == 'about' && 'active'}`}
																id="activities-tab"
																data-toggle="tab"
																href="#activities"
																role="tab"
																aria-controls="activities"
																aria-selected="true"
																>About this Seek</a
															>
														</li>
														<li className='nav-item' role="presentation" onClick={()=>setActiveNav('profiles')}>
															<a
																className={`nav-link ${activeNav == 'profiles' && 'active'}`}
																id="about-tab"
																data-toggle="tab"
																href="#about"
																role="tab"
																aria-controls="about"
																aria-selected="false"
																>Submitted Profiles</a
															>
														</li>
													</ul>
												</div>
												<div className="col-lg-2">
													<div className="d-flex justify-content-end">
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
																className="dropdown-menu mt-3 my---dropdown"
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
							<div className="custom-card">
								<div className="tab-content" id="myTabContent">
                  {activeNav == 'about' && <AboutSingleSeekNav />}
                {activeNav == 'profiles' && <SubmittedProfilesNav />}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
  )
}

export default SingleSeek