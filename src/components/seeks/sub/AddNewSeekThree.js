import React from 'react'
import { useNavigate } from 'react-router-dom'

const AddNewSeekThree = ({ page, setPage, seeksPage, setSeeksPage }) => {
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
									<li className="mr-2" onClick={()=>setSeeksPage('seeks')}>
										<i className="fa fa-chevron-right font-xs"></i>
										<span className="font-xs pl-2 f-weight-500 mt-1"
											>Thrybe Seek</span
										>
									</li>
									<li className="mr-2" onClick={()=>setSeeksPage('addnew-1')}>
										<i className="fa fa-chevron-right font-xs"></i>
										<span className="font-xs pl-2 f-weight-500 mt-1"
											><strong>Create New</strong></span
										>
									</li>
								</ul>
							</div>
							<div className="mt-4 d-flex align-items-center">
								<h5>Create a new Thrybe Seek</h5>
							</div>
						</div>
					</div>
					<div className="row mb-5">
						<div
							className="col-xl-5 col-md-6 col-md-8 d-flex justify-content-between align-item-center mt-3 basic-info"
						>
							<div className="d-flex align-item-center ml-2 basic-info-inner">
								<div
									className="circle purple d-flex justify-content-center align-items-center" onClick={()=>setSeeksPage('addnew-1')}
								>
									<i className="fa fa-check text-white"></i>
								</div>
								<div
									className="circle purple d-flex justify-content-center align-items-center ml-2" onClick={()=>setSeeksPage('addnew-2')}
								>
									<i className="fa fa-check text-white"></i>
								</div>
								<div
									className="circle purple d-flex justify-content-center align-item-center ml-2"
								>
									<span>3</span>
								</div>
								<h6 className="mt-2 ml-2">Preview</h6>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xl-5 col-md-8">
							<div className="custom-card">
								<form>
									<div className="px-4">
										<div>
											<h6 className="f-weight-600">About Seeker</h6>
											<p className="font-sm">
												Mauris convallis, leo eget dignissim semper, orci ipsum
												maximus dolor.
											</p>
											<hr />
											<div className="px-2">
												<ul style={{listStyleType: 'none'}}>
													<li>
														<span className="font-sm2 f-weight-600"
															>1. &nbsp;&nbsp;Special Feature</span
														>
														<p className="font-sm">My Blood Genotype is AA</p>
													</li>
													<li>
														<span className="font-sm2 f-weight-600"
															>2. &nbsp;&nbsp;Special Feature</span
														>
														<p className="font-sm">My weight is 1000LBS</p>
													</li>
													<li>
														<span className="font-sm2 f-weight-600"
															>3. &nbsp;&nbsp;Special Feature</span
														>
														<p className="font-sm">I am HIV Positive</p>
													</li>
													<li>
														<span className="font-sm2 f-weight-600"
															>4. &nbsp;&nbsp;Special Feature</span
														>
														<p className="font-sm">
															I’m physically incapable of taking care of myself
														</p>
													</li>
												</ul>
											</div>
										</div>
										<div className="mt-5">
											<h6 className="f-weight-600">Interested Person must</h6>
											<p className="font-sm">
												Mauris convallis, leo eget dignissim semper, orci ipsum
												maximus dolor.
											</p>
											<hr />
											<div className="px-2">
												<ul style={{listStyleType: 'none'}}>
													<li>
														<span className="font-sm2 f-weight-600"
															>1. &nbsp;&nbsp;Special Feature</span
														>
														<p className="font-sm">My Blood Genotype is AA</p>
													</li>
													<li>
														<span className="font-sm2 f-weight-600"
															>2. &nbsp;&nbsp;Special Feature</span
														>
														<p className="font-sm">My weight is 1000LBS</p>
													</li>
													<li>
														<span className="font-sm2 f-weight-600"
															>3. &nbsp;&nbsp;Special Feature</span
														>
														<p className="font-sm">I am HIV Positive</p>
													</li>
													<li>
														<span className="font-sm2 f-weight-600"
															>4. &nbsp;&nbsp;Special Feature</span
														>
														<p className="font-sm">
															I’m physically incapable of taking care of myself
														</p>
													</li>
												</ul>
											</div>
										</div>
										<div className="form-group mt-4 px-3">
											<label htmlFor="submit"></label>
											<input
												type="submit"
												className="btn btn-continue"
												value="Continue"
											/>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
  )
}

export default AddNewSeekThree