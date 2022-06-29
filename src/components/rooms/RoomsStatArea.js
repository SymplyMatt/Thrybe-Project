import React from "react";

const RoomsStatArea = () => {
  return (
    <div className='row mt-3'>
      <div className='col-xl-3 col-md-6 mb-3'>
        <div className='custom-card d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <img
              src='./assets/images/allRoomsIcon.svg'
              className='img-fluid'
              alt='Talks'
            />
            <div className='ml-4'>
              <h6 className='font-sm2 f-weight-500'>All Rooms</h6>
              <h4 className='f-weight-600 mb-0'>300K</h4>
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
              src='./assets/images/allRoomsActive-icon.svg'
              className='img-fluid'
              alt='Talks'
            />
            <div className='ml-4'>
              <h6 className='font-sm2 f-weight-500'>ACTIVE ROOMS</h6>
              <h4 className='f-weight-600 mb-0'>90K</h4>
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
              src='./assets/images/allRoomInactive-icon.svg'
              className='img-fluid'
              alt='Talks'
            />
            <div className='ml-4'>
              <h6 className='font-sm2 f-weight-500'>INACTIVE ROOMS</h6>
              <h4 className='f-weight-600 mb-0'>12K</h4>
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
              src='./assets/images/allRoomPending-icon.svg'
              className='img-fluid'
              alt='Talks'
            />
            <div className='ml-4'>
              <h6 className='font-sm2 f-weight-500'>PENDING ROOMS</h6>
              <h4 className='f-weight-600 mb-0'>27K</h4>
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

export default RoomsStatArea;
