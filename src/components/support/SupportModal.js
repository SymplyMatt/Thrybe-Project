import React from "react";

const SupportModal = ({ modal, setModal }) => {
  return (
    <>
      {modal == "one" && (
        <div
          className='modal fade show'
          id='composeMessage'
          tabindex='-1'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
          style={{ display: "block" }}
        >
          <div className='modal-dialog'>
            <div className='modal-content modal-design2'>
              <div className='modal-header'>
                <h5 className='modal-title'>Compose Message</h5>
                <button
                  type='button'
                  className='close'
                  data-dismiss='modal'
                  aria-label='Close'
                  onClick={(e) => {
                    e.preventDefault();
                    setModal("none");
                  }}
                >
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='modal-body'>
                <div className='modal-form-card'>
                  <form className='add-user-form mt-4'>
                    <div className='form-group position-relative mb-4 pl-3 pr-3'>
                      <label for='gender'>Message Type</label>
                      <select
                        className='form_input_fields bg-transparent'
                        type='select'
                        name='gender'
                      >
                        <option>Contact</option>
                        <option>Contact</option>
                      </select>
                      <i className='fa fa-angle-down position-absolute form-select-dropdown'></i>
                    </div>
                    <div className='form-group position-relative mb-4 pl-3 pr-3'>
                      <label for='firstName'>Message Title</label>
                      <input
                        className='form_input_fields'
                        type='text'
                        name='firstName'
                      />
                    </div>
                    <div className='form-group position-relative mb-4 pl-3 pr-3'>
                      <textarea
                        className='form_textarea_fields pl-4 pt-3 w-100'
                        placeholder='lorem lorem lorem lorem'
                        name='userBio'
                      ></textarea>
                    </div>
                    <div
                      className='form-group'
                      onClick={(e) => {
                        e.preventDefault();
                        setModal("two");
                      }}
                    >
                      <a
                        href='#'
                        className='btn btn-continue'
                        data-toggle='modal'
                        data-target='#MessageSent'
                        data-dismiss='modal'
                      >
                        Send Message
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {modal == "two" && (
        <div
          className='modal fade show'
          id='MessageSent'
          tabindex='-1'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
          style={{ display: "block" }}
        >
          <div className='modal-dialog'>
            <div className='modal-content modal-design2'>
              <div className='modal-body'>
                <div className='modal-form-card'>
                  <div className='row justify-content-center'>
                    <div className='col-lg-10'>
                      <div className='d-flex flex-column justify-content-center'>
                        <img
                          src='./assets/images/del-purple.svg'
                          className='img-fluid mb-3'
                          alt='Successful'
                          style={{ maxHeight: "60px" }}
                        />
                        <div className='mb-3'>
                          <h4 className='f-weight-600 text-center'>
                            Are you sure?
                          </h4>
                        </div>
                        <div className='buttons mb-3'>
                          <button type='button' className='btn btn-continue'>
                            Continue
                          </button>
                        </div>
                        <a
                          href='#'
                          className='text-center text-dark'
                          data-dismiss='modal'
                          onClick={(e) => {
                            e.preventDefault();
                            setModal("none");
                          }}
                        >
                          Cancel
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SupportModal;
