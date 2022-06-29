import React from "react";

const AddNewRoomThree = () => {
  return (
    <div className='main-content'>
      <div className='container-fluid'>
        <div className='row mb-3'>
          <div className='col-12 mt-5'>
            <div className='d-flex align-item-center'>
              <ul className='d-flex'>
                <li className='mr-2'>
                  <i className='fa fa-home'></i>
                  <span className='font-xs pl-2 f-weight-500 mt-1'>Home</span>
                </li>
                <li className='mr-2'>
                  <i className='fa fa-chevron-right font-xs'></i>
                  <span className='font-xs pl-2 f-weight-500 mt-1'>
                    Thrybe Room
                  </span>
                </li>
                <li className='mr-2'>
                  <i className='fa fa-chevron-right font-xs'></i>
                  <span className='font-xs pl-2 f-weight-500 mt-1'>
                    <strong>Create New</strong>
                  </span>
                </li>
              </ul>
            </div>
            <div className='mt-4 d-flex align-items-center'>
              <h5>Create a new Thrybe Room</h5>
            </div>
          </div>
        </div>
        <div className='row mb-5'>
          <div className='col-xl-5 col-md-8 d-flex align-item-center mt-3 basic-info'>
            <div className='d-flex align-item-center ml-2 basic-info-inner'>
              <div className='circle purple d-flex justify-content-center align-item-center mb-2'>
                <i
                  className='fa fa-check mt-1 f-weight-500'
                  aria-hidden='true'
                ></i>
              </div>
              <div className='circle purple d-flex justify-content-center align-item-center mb-2 ml-1'>
                <i
                  className='fa fa-check mt-1 f-weight-500'
                  aria-hidden='true'
                ></i>
              </div>
              <div className='circle purple d-flex justify-content-center align-item-center mb-2 ml-1'>
                <span>3</span>
              </div>
              <h6 className='mt-2 ml-2'>Preview</h6>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='custom-card col-xl-5 col-md-8 ml-3'>
            <div className='custom-card'>
              <div className='mb-4'>
                <img
                  src='./assets/images/addroomUpload.svg'
                  alt='addroomUpload'
                  className='mb-2'
                />
                <h6 className='f-weight-800 mb-4 mt-2'>Boys Secret Club</h6>
              </div>
              <hr className='mb-4' />
              <div className='mt-2 mb-2'>
                <div className='mb-4'>
                  <h5 className='font-sm2 f-weight-800 mt-2'>
                    <u>
                      <strong>Description</strong>
                    </u>
                  </h5>
                  <p className='font-sm'>
                    Lorem ipsum dolor amet. Lorem ipsum dolor amet. Lorem ipsum
                    dolor amet
                  </p>
                </div>
                <div>
                  <h6 className='font-sm2 f-weight-600'>
                    <u>Rules</u>
                  </h6>
                  <ol className='pl-2'>
                    <li className='font-sm'>
                      1. Always Keep quiet when the speaker talk
                    </li>
                    <li className='font-sm'>
                      2. Mute your mic to avert distractions
                    </li>
                    <li className='font-sm'>
                      3. Raise hand when you want to speak
                    </li>
                    <li className='font-sm'>
                      4. No abusive word. Be respectful
                    </li>
                  </ol>
                </div>
              </div>
              <hr />
              <div className='mt-4 mb-4'>
                <img src='./assets/images/clock-icon.svg' alt='' />
                <span className='font-sm2 f-weight-800'>22/2/2022 07:30AM</span>
              </div>
              <hr className='mb-4' />
              <div className='d-flex flex-column mt-2 mb-4'>
                <h6 className='f-weight-700'>Room Author</h6>
                <div>
                  <img
                    src='./assets/images/author-pic.svg'
                    alt='author-pic'
                    style={{
                      width: "50px",
                      marginRight: "-10px",
                      marginLeft: "-13px",
                    }}
                  />
                  <span>Nusaiba Sabiu</span>
                </div>
              </div>
              <div className='mt-3'>
                <h6 className='f-weight-700 mb-3'>Selected Users</h6>
                <div className='d-flex align-items-center pl-3'>
                  <div>
                    <img
                      src='./assets/images/members-avatar1.svg'
                      alt='membericon'
                      style={{ marginLeft: "-20px" }}
                    />
                    <img
                      src='./assets/images/members-avatar2.svg'
                      alt='membericon'
                      style={{ marginLeft: "-20px" }}
                    />
                    <img
                      src='./assets/images/members-avatar3.svg'
                      alt='membericon'
                      style={{ marginLeft: "-20px" }}
                    />
                    <img
                      src='./assets/images/members-avatar4.svg'
                      alt='membericon'
                      style={{ marginLeft: "-20px" }}
                    />
                  </div>
                  <span className='font-xs f-weight-700'>20+</span>
                </div>
              </div>
            </div>
            <div className='mt-1'>
              <label htmlFor='submit'></label>
              <input
                type='submit'
                className='btn btn-continue'
                value='Publish'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewRoomThree;
