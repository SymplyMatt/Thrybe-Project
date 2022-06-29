import React from 'react'

const UserBio = () => {
  return (
        <div className="tab-pane fade show active" id="v-pills-bio" role="tabpanel" aria-labelledby="v-pills-bio-tab">
            <div>
                <div className="about-user">
                    <h6 className="f-weight-600">About user</h6>
                    <p className="font-sm mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non risus enim. Praesent nec malesuada turpis. 
                        Ut porttitor nunc eget neque dapibus, et pellentesque neque euismod. Morbi ultricies sem at porttitor suscipit. 
                        Nunc ligula mi, cursus vitae arcu nec, sodales condimentum lectus.
                    </p>
                </div>
                <hr />
                <div className="employment-details">
                    <h6 className="f-weight-600">Employment</h6>
                    <p className="font-sm mb-0">
                        Tell us about your work experience
                    </p>
                    <div className="d-flex mt-4 justify-content-between">
                        <span className="font-sm"><img src="./assets/images/industry-icon.svg" className="img-fluid mr-2" alt="industry" />Industry</span>
                        <a href="#" className="font-sm text-dark f-weight-600">Media <i className="fa fa-angle-right ml-2"></i></a>
                    </div>
                    <hr />
                    <div className="d-flex mt-4 justify-content-between">
                        <span className="font-sm"><img src="./assets/images/job-icon.svg" className="img-fluid mr-2" alt="industry" />Job</span>
                        <a href="#" className="font-sm text-dark f-weight-600">Blogger <i className="fa fa-angle-right ml-2"></i></a>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default UserBio