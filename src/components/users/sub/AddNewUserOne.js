import React from 'react'
import { useNavigate } from 'react-router-dom'

const AddNewUserOne = ({ page,setPage,usersPage, setUsersPage }) => {
	const navigate = useNavigate();
  return (
            <div className="main-content">
				<div className="container-fluid">
					<div className="row mb-3">
						<div className="col-12 mt-5">
							<div className="d-flex align-item-center">
								<ul className="d-flex">
									<li className="mr-2" onClick={(e) => {
                        			setPage('login');
                        			navigate('/')
                    				}}>
										<i className="fa fa-home"></i
										><span className="font-xs pl-2 f-weight-500 mt-1">Home</span>
									</li>
									<li className="mr-2" onClick={()=>setUsersPage('mgt')}>
										<i className="fa fa-chevron-right font-xs"></i>
										<span className="font-xs pl-2 f-weight-500 mt-1"
											>Users Management</span
										>
									</li>
									<li className="mr-2">
										<i className="fa fa-chevron-right font-xs"></i>
										<span className="font-xs pl-2 f-weight-500 mt-1"
											><strong>Create New</strong></span
										>
									</li>
								</ul>
							</div>
							<div className="mt-4 d-flex align-items-center">
								<h5>Add a New User</h5>
							</div>
						</div>
					</div>
					<div className="row mb-5">
						<div
							className="col-xl-5 col-md-8 d-flex justify-content-between align-item-center mt-3 basic-info"
						>
							<div className="d-flex align-item-center ml-2 basic-info-inner">
								<div
									className="circle purple d-flex justify-content-center align-item-center"
								>
									<span className="text-white">1</span>
								</div>
								<h6 className="mt-2 ml-2">Basic Information</h6>
							</div>
							<div className="d-flex mr-2">
								<div
									className="circle white d-flex justify-content-center align-item-center m-2" onClick={() => {
                                    setUsersPage('addnew-2')
                                    }}
								>
									<span>2</span>
								</div>
								<div
									className="circle white d-flex justify-content-center align-item-center m-2" onClick={() => {
                                    setUsersPage('addnew-3')
                                    }}
								>
									<span>3</span>
								</div>
								<div
									className="circle white d-flex justify-content-center align-item-center m-2" onClick={() => {
                                    setUsersPage('addnew-4')
                                    }}
								>
									<span>4</span>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xl-5 col-md-8">
							<div className="custom-card mb-3">
								<form className="add-user-form">
									<div className="d-flex align-item-center mb-5 pr-3">
										<a href="#">
											<img
												src="./assets/images/fileUpload.svg"
												id="upload-img"
											/>
										</a>
										<input
                                      type="file"
                                      name="file_upload"
                                      id="file_upload"
                                      style={{ display: 'none' }}
										/>
										<h6 className="d-flex align-self-center ml-2">Upload Avatar</h6>
									</div>
									<div className="form-group position-relative mb-4 pl-3 pr-3">
										<label htmlFor="firstName">First Name</label>
										<input
											className="form_input_fields"
											type="text"
											name="firstName"
										/>
									</div>
									<div className="form-group position-relative mb-4 pl-3 pr-3">
										<label htmlFor="lastName">Last Name</label>
										<input
											className="form_input_fields"
											type="text"
											name="lastName"
										/>
									</div>
									<div className="form-group position-relative mb-4 pl-3 pr-3">
										<input
											className="form_input_fields tel-field pl-3"
											type="tel"
											name="telephone"
										/>
										<div
											className="position-absolute d-flex input-decor3 align-items-center"
										>
											<div
												data-input-name="country2"
												data-selected-country="US"
												className="select-country"
												data-scrollable="true"
												data-scrollable-height="250px"
											></div>
											<div className="pl-1">
												<img
													src="./assets/images/black-line-vert.svg"
													className="img-fluid"
													alt="vert-line"
												/>
											</div>
										</div>
									</div>
									<div className="form-group position-relative mb-4 pl-3 pr-3">
										<label htmlFor="gender">Gender</label>
										<select
											className="form_input_fields bg-transparent"
											type="select"
											name="gender"
										>
											<option>Male</option>
											<option>Female</option>
										</select>
										<i
											className="fa fa-angle-down position-absolute form-select-dropdown"
										></i>
									</div>
									<div className="form-group position-relative mb-4 pl-3 pr-3">
										<label htmlFor="age">Age</label>
										<select
											className="form_input_fields bg-transparent"
											type="select"
											name="age"
										>
											<option>27 Years Old</option>
											<option>26 Years Old</option>
										</select>
										<i
											className="fa fa-angle-down position-absolute form-select-dropdown"
										></i>
									</div>
                              <div className="form-group mt-4 px-3" onClick={() => {
                                    setUsersPage('addnew-2')
                                    }}>
										<label htmlFor="submit"></label>
										<input
											type="submit"
											className="btn btn-continue"
											value="Continue"
										/>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
  )
}

export default AddNewUserOne