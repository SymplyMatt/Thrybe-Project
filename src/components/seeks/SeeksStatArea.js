import React from 'react'

const SeeksStatArea = () => {
  return (
          <div className="row mt-3">
						<div className="col-xl-3 col-md-6 mb-3">
							<div
								className="custom-card d-flex justify-content-between align-items-center"
							>
								<div className="d-flex align-items-center">
									<div className="ml-4">
										<h6 className="font-sm2 f-weight-500">ALL SEEKS</h6>
										<h4 className="f-weight-600 mb-0">300K</h4>
									</div>
								</div>
								<a href="#"><i className="fa fa-angle-right text-dark"></i></a>
							</div>
						</div>
						<div className="col-xl-3 col-md-6 mb-3">
							<div
								className="custom-card d-flex justify-content-between align-items-center"
							>
								<div className="d-flex align-items-center">
									<img
										src="./assets/images/activeSeeksIcon.svg"
										className="img-fluid"
										alt="Talks"
									/>
									<div className="ml-4">
										<h6 className="font-sm2 f-weight-500">ACTIVE SEEKS</h6>
										<h4 className="f-weight-600 mb-0">300K</h4>
									</div>
								</div>
								<a href="#"><i className="fa fa-angle-right text-dark"></i></a>
							</div>
						</div>
						<div className="col-xl-3 col-md-6 mb-3">
							<div
								className="custom-card d-flex justify-content-between align-items-center"
							>
								<div className="d-flex align-items-center">
									<img
										src="./assets/images/inactiveSeeksIcon.svg"
										className="img-fluid"
										alt="User"
									/>
									<div className="ml-4">
										<h6 className="font-sm2 f-weight-500">INACTIVE SEEKS</h6>
										<h4 className="f-weight-600 mb-0">300K</h4>
									</div>
								</div>
								<a href="#"><i className="fa fa-angle-right text-dark"></i></a>
							</div>
						</div>
						<div className="col-xl-3 col-md-6 mb-3">
							<div
								className="custom-card d-flex justify-content-between align-items-center"
							>
								<div className="d-flex align-items-center">
									<img
										src="./assets/images/pending-seeks.svg"
										className="img-fluid"
										alt="User"
									/>
									<div className="ml-4">
										<h6 className="font-sm2 f-weight-500">PENDING SEEKS</h6>
										<h4 className="f-weight-600 mb-0">300K</h4>
									</div>
								</div>
								<a href="#"><i className="fa fa-angle-right text-dark"></i></a>
							</div>
						</div>
					</div>
  )
}

export default SeeksStatArea