import React from 'react'

const BasicInfo = () => {
  return (
        <div className="tab-pane fade show active" id="v-pills-bInfo" role="tabpanel" aria-labelledby="v-pills-bInfo-tab" style={{opacity : '1'}}>
            <div className="d-flex justify-content-between">
                <span className="font-sm"><img src="./assets/images/industry-icon.svg" className="img-fluid mr-2" alt="industry" />Religion</span>
                <a href="#" className="font-sm text-dark f-weight-600">Islam <i className="fa fa-angle-right ml-2"></i></a>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
                <span className="font-sm"><img src="./assets/images/horoscope-icon.svg" className="img-fluid mr-2" alt="industry" />Horoscope</span>
                <a href="#" className="font-sm text-dark f-weight-600">Pisces <i className="fa fa-angle-right ml-2"></i></a>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
                <span className="font-sm"><img src="./assets/images/interestedIn-icon.svg" className="img-fluid mr-2" alt="industry" />Interested in</span>
                <a href="#" className="font-sm text-dark f-weight-600">Men <i className="fa fa-angle-right ml-2"></i></a>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <span className="font-sm d-flex align-items-center"><i className="fa fa-heart-o mr-2" style={{ fontSize: '18px' }}></i> Seeking</span>
                <a href="#" className="font-sm text-dark f-weight-600">Long-term Relationship<i className="fa fa-angle-right ml-2"></i></a>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
                <span className="font-sm"><img src="./assets/images/kids-icon.svg" className="img-fluid mr-2" alt="industry" />Wants Kids</span>
                <a href="#" className="font-sm text-dark f-weight-600">Yes<i className="fa fa-angle-right ml-2"></i></a>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
                <span className="font-sm"><img src="./assets/images/smoking-icon.svg" className="img-fluid mr-2" alt="industry" />Smoking</span>
                <a href="#" className="font-sm text-dark f-weight-600">No<i className="fa fa-angle-right ml-2"></i></a>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
                <span className="font-sm"><img src="./assets/images/beerIcon.svg" className="img-fluid mr-2" alt="industry" />Drinking</span>
                <a href="#" className="font-sm text-dark f-weight-600">Social Drinker<i className="fa fa-angle-right ml-2"></i></a>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
                <span className="font-sm"><img src="./assets/images/education-icon.svg" className="img-fluid mr-2" alt="industry" />Education</span>
                <a href="#" className="font-sm text-dark f-weight-600">PhD<i className="fa fa-angle-right ml-2"></i></a>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
                <span className="font-sm"><img src="./assets/images/Location.svg" className="img-fluid mr-2" alt="industry" />Location</span>
                <a href="#" className="font-sm text-dark f-weight-600">Lagos, Nigeria<i className="fa fa-angle-right ml-2"></i></a>
            </div>
        </div>
  )
}

export default BasicInfo