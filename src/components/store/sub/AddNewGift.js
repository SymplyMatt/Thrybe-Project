import React from "react";
import { useNavigate } from "react-router-dom";
const AddNewGift = ({ page, setPage, storePage, setStorePage }) => {
  const navigate = useNavigate();
  return (
    <div className='main-content'>
      <div className='container-fluid'>
        {/* breadcrumb */}
        <div className='row mb-3'>
          <div className='col-12 mt-5'>
            <div className='d-flex align-item-center'>
              <ul className='d-flex'>
                <li
                  className='mr-2'
                  onClick={(e) => {
                    navigate("/");
                  }}
                >
                  <i className='fa fa-home'></i>
                  <span className='font-xs pl-2 f-weight-500 mt-1'>Home</span>
                </li>
                <li
                  className='mr-2'
                  onClick={(e) => {
                    setStorePage("mgt");
                  }}
                >
                  <i className='fa fa-chevron-right font-xs'></i>
                  <span className='font-xs pl-2 f-weight-500 mt-1'>
                    Thrybe Store
                  </span>
                </li>
                <li
                  className='mr-2'
                  onClick={(e) => {
                    setStorePage("addnew-1");
                  }}
                >
                  <i className='fa fa-chevron-right font-xs'></i>
                  <span className='font-xs pl-2 f-weight-500 mt-1'>
                    <strong>Create New</strong>
                  </span>
                </li>
              </ul>
            </div>
            <div className='mt-4 d-flex align-items-center'>
              <h5>Create a new Thrybe Gift</h5>
            </div>
          </div>
        </div>

        {storePage == "addnew-1" && (
          <>
            <div className='row mb-5'>
              <div className='col-xl-5 col-md-8 d-flex justify-content-between align-item-center mt-3 basic-info'>
                <div className='d-flex align-item-center ml-2 basic-info-inner'>
                  <div className='circle purple d-flex justify-content-center align-item-center'>
                    <span className='text-white'>1</span>
                  </div>
                  <h6 className='mt-2 ml-2'>Gift's Basic Details</h6>
                </div>
                <div className='d-flex mr-2'>
                  <div
                    className='circle white d-flex justify-content-center align-item-center m-2'
                    onClick={() => {
                      setStorePage("addnew-2");
                    }}
                  >
                    <span>2</span>
                  </div>
                  <div className='circle white d-flex justify-content-center align-item-center m-2'>
                    <span>3</span>
                  </div>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-xl-5 col-md-8'>
                <div className='custom-card mb-3'>
                  <form className='add-user-form'>
                    <div className='form-group position-relative mt-4 mb-4 pl-3 pr-3'>
                      <label for='firstName'>Gift Name</label>
                      <input
                        className='form_input_fields'
                        type='text'
                        name='firstName'
                        placeholder='e.g Tiny balls'
                      />
                    </div>
                    <div className='px-3'>
                      <div className='poster-div py-3 h-auto font-sm2 mb-4'>
                        Mauris convallis, leo eget dignissim semper, orci ipsum
                        maximus dolor.
                      </div>
                    </div>
                    <div className='form-group position-relative mb-4 px-3'>
                      <label for='firstName'>Price (in Token)</label>
                      <input
                        className='form_input_fields'
                        type='text'
                        name='firstName'
                        placeholder='e.g ₦3,405'
                      />
                      <a
                        href='#'
                        id='passwordVisibility'
                        className='position-absolute input-decor2 d-flex align-items-center'
                        style={{ top: "13px" }}
                      >
                        <svg
                          width='1'
                          height='32'
                          viewBox='0 0 1 32'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <rect width='1' height='32' fill='#F2F2F2' />
                        </svg>
                        <span className='ml-4 font-sm f-weight-600 mr-2 text-dark'>
                          125 <br />
                          value
                        </span>
                      </a>
                    </div>
                    <div className='form-group position-relative mb-4 pl-3 pr-3'>
                      <label for='privacy'>Gift privacy</label>
                      <select
                        className='form_input_fields bg-transparent'
                        type='select'
                        name='privacy'
                      >
                        <option>Private</option>
                        <option>Public</option>
                      </select>
                      <i className='fa fa-angle-down position-absolute form-select-dropdown'></i>
                    </div>
                    <div
                      className='form-group mt-4 px-3'
                      onClick={(e) => {
                        e.preventDefault();
                        setStorePage("addnew-2");
                      }}
                    >
                      <label for='submit'></label>
                      <input
                        type='submit'
                        className='btn btn-continue'
                        value='Continue'
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </>
        )}

        {storePage == "addnew-2" && (
          <>
            <div className='row mb-5'>
              <div className='col-xl-5 col-md-8 d-flex justify-content-between align-item-center mt-3 basic-info'>
                <div className='d-flex align-item-center ml-2 basic-info-inner'>
                  <div
                    className='circle purple d-flex justify-content-center align-items-center'
                    onClick={() => {
                      setStorePage("addnew-1");
                    }}
                  >
                    <i className='fa fa-check text-white'></i>
                  </div>
                  <div className='circle num2 purple d-flex justify-content-center align-item-center ml-2'>
                    <span>2</span>
                  </div>
                  <h6 className='mt-2 ml-2'>Advanced Information</h6>
                </div>
                <div className='d-flex mr-2'>
                  <div
                    className='circle white d-flex justify-content-center align-item-center m-2'
                    onClick={() => {
                      setStorePage("addnew-3");
                    }}
                  >
                    <span>3</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-xl-5 col-lg-6 col-md-8'>
                <div className='custom-card'>
                  <form>
                    <div className='form-group position-relative mt-4 mb-4 pl-3 pr-3'>
                      <div className='row'>
                        <div className='col-12'>
                          <a
                            href='#'
                            data-toggle='modal'
                            data-target='#uploadImg'
                          >
                            <img
                              src='./assets/images/upload-gift-main.svg'
                              className='img-fluid'
                              style={{ width: "100%" }}
                              alt=''
                            />
                          </a>
                        </div>
                      </div>
                      <div className='row mt-3'>
                        <div className='col-4 mb-3'>
                          <a href='#' data-toggle='modal' data-target=''>
                            <img
                              src='./assets/images/upload-gift-another.svg'
                              className='img-fluid'
                              style={{ width: "100%" }}
                              alt=''
                            />
                          </a>
                        </div>
                        <div className='col-4 mb-3'>
                          <a href='#' data-toggle='modal' data-target=''>
                            <img
                              src='./assets/images/upload-gift-another.svg'
                              className='img-fluid'
                              style={{ width: "100%" }}
                              alt=''
                            />
                          </a>
                        </div>
                        <div className='col-4 mb-3'>
                          <a href='#' data-toggle='modal' data-target=''>
                            <img
                              src='./assets/images/upload-gift-another.svg'
                              className='img-fluid'
                              style={{ width: "100%" }}
                              alt=''
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className='form-group mt-4 px-3'
                      onClick={() => {
                        setStorePage("addnew-3");
                      }}
                    >
                      <input
                        type='submit'
                        className='btn btn-continue'
                        value='Continue'
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </>
        )}

        {storePage == "addnew-3" && (
          <>
            <div className='row mb-5'>
              <div className='col-md-6 d-flex align-item-center mt-3 basic-info'>
                <div className='d-flex align-item-center ml-2 basic-info-inner'>
                  <div
                    className='circle purple d-flex justify-content-center align-item-center mb-2'
                    onClick={() => {
                      setStorePage("addnew-1");
                    }}
                  >
                    <i
                      className='fa fa-check mt-1 f-weight-500'
                      aria-hidden='true'
                    ></i>
                  </div>
                  <div
                    className='circle purple d-flex justify-content-center align-item-center mb-2 ml-1'
                    onClick={() => {
                      setStorePage("addnew-2");
                    }}
                  >
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
              <div className='custom-card col-md-6 ml-3'>
                <form action=''>
                  <div className='form-group position-relative mt-4 mb-4 pl-3 pr-3'>
                    <div className='row'>
                      <div className='col-12'>
                        <div>
                          <img
                            src='./assets/images/uploaded-main-giftImg.svg'
                            className='img-fluid'
                            style={{ width: "100%" }}
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='row mt-3'>
                      <div className='col-4 mb-3'>
                        <div
                          className='gift-img-div'
                          style={{ backgroundColor: "#d80027" }}
                        >
                          <img
                            src='./assets/images/forYou-giftImg.svg'
                            className='img-fluid'
                            style={{ width: "100%" }}
                            alt=''
                          />
                        </div>
                      </div>
                      <div className='col-4 mb-3'>
                        <div
                          className='gift-img-div'
                          style={{ backgroundColor: "#d80027" }}
                        >
                          <img
                            src='./assets/images/forYou-giftImg.svg'
                            className='img-fluid'
                            style={{ width: "100%" }}
                            alt=''
                          />
                        </div>
                      </div>
                      <div className='col-4 mb-3'>
                        <div
                          className='gift-img-div'
                          style={{ backgroundColor: "#d80027" }}
                        >
                          <img
                            src='./assets/images/forYou-giftImg.svg'
                            className='img-fluid'
                            style={{ width: "100%" }}
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='mt-2 mb-4'>
                    <h5 className='f-weight-600 mb-2'>Tiny Balls</h5>
                  </div>
                  <hr />
                  <div className='mt-2 mb-2'>
                    <div className='mb-4'>
                      <h5 className='font-sm2 f-weight-800 mt-2'>
                        <u>
                          <strong>Description</strong>
                        </u>
                      </h5>
                      <p className='font-sm'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent volutpat, quam eu scelerisque vestibulum, nulla
                        magna gravida risus, vitae rhoncus libero lectus et
                        dolor. Donec elementum magna ac dui imperdiet luctus.
                        Phasellus mattis libero metus, ac scelerisque augue
                        tempor ac. Praesent commodo porttitor velit ac rhoncus.
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className='d-flex'>
                    <div>
                      <h5 className='font-sm2 mb-0 f-weight-600'>94,0394</h5>
                      <div className='mt-3'>
                        <span className='font-sm'>Token Value</span>
                      </div>
                    </div>
                    <div className='ml-3'>
                      <h5 className='font-sm2 mb-0 f-weight-600'>₦1,200</h5>
                      <div className='mt-3'>
                        <span className='font-sm'>Naira Value</span>
                      </div>
                    </div>
                  </div>
                  <div className='form-group mt-4'>
                    <label for='submit'></label>
                    <input
                      type='submit'
                      className='btn btn-continue'
                      value='Continue'
                    />
                  </div>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AddNewGift;
