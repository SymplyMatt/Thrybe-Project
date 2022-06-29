import React from "react";

const GiftsPurchases = () => {
  return (
    <div className='col-md-6 mb-3 d-flex flex-column flex-grow-1'>
      <div className='custom-card h-100'>
        <div className='d-flex align-items-center justify-content-between mt-3'>
          <div className=''>
            <h6 className='font-sm2 f-weight-500'>GIFTS PURCHASES</h6>
            <h5 className='f-weight-600 mb-0 text-danger'>-300%</h5>
          </div>
          <div className=''>
            <h6 className='font-sm2 f-weight-500'>TOTAL AMOUNT MADE</h6>
            <h5 className='f-weight-600 mb-0 text-danger'>304930 - ₦197K</h5>
          </div>
        </div>
        <div className='trend-div mt-4'>
          <img
            src='./assets/images/red-chart.svg'
            className='img-fluid'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default GiftsPurchases;
