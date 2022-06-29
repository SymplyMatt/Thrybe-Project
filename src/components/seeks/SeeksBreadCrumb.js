import React from 'react'
import { useNavigate } from 'react-router-dom';


const SeeksBreadCrumb = ({ page, setPage, showBtn, setShowBtn, seeksPage, setSeeksPage }) => {
  const navigate = useNavigate();
  return (
          <div className="row">
						<div className="col-12 mt-5 mb-3">
							<ul className="myBreadcrumb p-0">
                <li onClick={(e) => {
                  e.preventDefault();
                  setPage('login');
                  navigate('/')
                }}>
									<a href="#" className="d-flex align-items-center"
										><i className="fa fa-home text-darkGrey"></i
										><span className="font-xs pl-2 f-weight-500 mt-1 text-dark"
											>Home</span
										></a
									>
								</li>
								<li className="active" onClick={(e) => {
                      e.preventDefault();
                        setSeeksPage('seeks');
                    }}>
									<a href="#" className="d-flex align-items-center"
										><span className="font-xs f-weight-500 mt-1 text-dark"
											>Thrybe Seeks</span
										></a
									>
								</li>
							</ul>
							<div
								className="mt-4 d-flex justify-content-between align-items-center"
							>
								<h5>Thrybe Seeks</h5>
								<a href="#" className={`btn btn-primary ${!showBtn ? 'not-show' : ''}`} id="AddUser" onClick={(e) => {
                      e.preventDefault();
                      setSeeksPage('addnew-1');
                    }}>Add New</a>
							</div>
						</div>
					</div>
  )
}

export default SeeksBreadCrumb