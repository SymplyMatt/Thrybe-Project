import React from "react";

const TalksStatArea = ({
  allTalks,
  activeTalks,
  pendingTalks,
  inActiveTalks,
}) => {
  return (
    <div className='row mt-3'>
      <div className='col-xl-3 col-md-6 mb-3'>
        <div className='custom-card d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <img
              src='./assets/images/allTalksIcon.svg'
              className='img-fluid'
              alt='Talks'
            />
            <div className='ml-4'>
              <h6 className='font-sm2 f-weight-500'>ALL TALKS</h6>
              <h4 className='f-weight-600 mb-0'>{allTalks}</h4>
            </div>
          </div>
          <a href='#'>
            <i className='fa fa-angle-right text-dark'></i>
          </a>
        </div>
      </div>
      <div className='col-xl-3 col-md-6 mb-3'>
        <div className='custom-card d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <img
              src='./assets/images/microphoneplay-icon.svg'
              className='img-fluid'
              alt='Talks'
            />
            <div className='ml-4'>
              <h6 className='font-sm2 f-weight-500'>ACTIVE TALKS</h6>
              <h4 className='f-weight-600 mb-0'>{activeTalks}</h4>
            </div>
          </div>
          <a href='#'>
            <i className='fa fa-angle-right text-dark'></i>
          </a>
        </div>
      </div>
      <div className='col-xl-3 col-md-6 mb-3'>
        <div className='custom-card d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <img
              src='./assets/images/microphonepause-icon.svg'
              className='img-fluid'
              alt='Talks'
            />
            <div className='ml-4'>
              <h6 className='font-sm2 f-weight-500'>INACTIVE TALKS</h6>
              <h4 className='f-weight-600 mb-0'>{inActiveTalks}</h4>
            </div>
          </div>
          <a href='#'>
            <i className='fa fa-angle-right text-dark'></i>
          </a>
        </div>
      </div>
      <div className='col-xl-3 col-md-6 mb-3'>
        <div className='custom-card d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <img
              src='./assets/images/microphonerotate-icon.svg'
              className='img-fluid'
              alt='Talks'
            />
            <div className='ml-4'>
              <h6 className='font-sm2 f-weight-500'>PENDING TALKS</h6>
              <h4 className='f-weight-600 mb-0'>{pendingTalks}</h4>
            </div>
          </div>
          <a href='#'>
            <i className='fa fa-angle-right text-dark'></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TalksStatArea;
