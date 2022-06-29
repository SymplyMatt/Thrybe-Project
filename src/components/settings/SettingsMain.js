import React from "react";

const SettingsMain = () => {
  return (
    <div className='row'>
      <div className='custom-card col-xl-5 col-md-8 ml-3'>
        <div className='custom-card mb-3'>
          <form className='add-user-form'>
            <h6 className='mb-3'>Account Settings</h6>
            <div className='form-group d-flex align-items-center mb-3'>
              <img
                src='./assets/images/settings-avatar.svg'
                alt='settings-avatar'
                className='mr-1'
              />
              <div className='d-flex ml-4'>
                <a href='#'>
                  <img
                    src='./assets/images/Edit.svg'
                    className='img-fluid'
                    alt=''
                  />
                </a>
                <a href='#' className='ml-4'>
                  <img
                    src='./assets/images/delete-icon-black.svg'
                    className='img-fluid'
                    alt=''
                  />
                </a>
              </div>
            </div>
            <div className='form-group position-relative mb-3 px-3'>
              <label htmlFor='fullName'>Full Name</label>
              <input
                className='form_input_fields'
                type='text'
                name='fullName'
              />
            </div>
            <div className='form-group position-relative px-3 mb-2'>
              <textarea
                className='form_textarea_fields pt-3 w-100'
                placeholder='Tell us about yourself'
                name='userBio'
              ></textarea>
            </div>
            <div className='form-group m-1 px-3'>
              <label htmlFor='Modify'></label>
              <input
                type='submit'
                className='btn btn-continue'
                value='Modify'
              />
            </div>
          </form>
        </div>
        <div className='custom-card mb-3'>
          <form>
            <h6 className='mb-4'>Contact Information</h6>
            <div className='form-group position-relative px-3'>
              <input
                type='text'
                className='form_input_fields'
                placeholder='Email address'
              />
              <div className='position-absolute d-flex input-decor align-items-center'>
                <img
                  src='./assets/images/Mail-black-icon.svg'
                  className='img-fluid'
                  alt='mail'
                />
                <div className='pl-4'>
                  <img
                    src='./assets/images/black-line-vert.svg'
                    className='img-fluid'
                    alt='vert-line'
                  />
                </div>
              </div>
            </div>
            <div className='form-group position-relative mb-1 px-3'>
              <input
                className='form_input_fields tel-field'
                type='tel'
                name='telephone'
              />
              {/* <div className='position-absolute d-flex input-decor3 align-items-center'>
                <div
                  data-input-name='country2'
                  data-selected-country='US'
                  className='select-country'
                  data-scrollable='true'
                  data-scrollable-height='250px'
                ></div>
                <div className='pl-1'>
                  <img
                    src='./assets/images/black-line-vert.svg'
                    className='img-fluid'
                    alt='vert-line'
                  />
                </div>
              </div> */}
            </div>
            <div className='form-group px-3'>
              <label htmlFor='Modify'></label>
              <input
                type='submit'
                className='btn btn-continue'
                value='Modify'
              />
            </div>
          </form>
        </div>
        <div className='custom-card mb-3'>
          <form>
            <h6>Password Management</h6>
            <div className='form-group px-3 position-relative mt-3 mb-1'>
              <input
                type='password'
                className='form_input_fields'
                placeholder='*****'
                id='login-password'
              />
              <div className='position-absolute d-flex input-decor align-items-center'>
                <img
                  src='./assets/images/Lock-black-icon.svg'
                  className='img-fluid'
                  alt='mail'
                />
                <div className='pl-4'>
                  <img
                    src='./assets/images/black-line-vert.svg'
                    className='img-fluid'
                    alt='vert-line'
                  />
                </div>
              </div>
              <a
                href='#'
                id='passwordVisibility'
                className='position-absolute input-decor2'
              >
                <img
                  src='./assets/images/View-password-icon.svg'
                  className='img-fluid'
                  alt='view-passowrd'
                />
              </a>
            </div>
            <div className='form-group px-3'>
              <label htmlFor='Modify'></label>
              <input
                type='submit'
                className='btn btn-continue'
                value='Modify'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SettingsMain;
