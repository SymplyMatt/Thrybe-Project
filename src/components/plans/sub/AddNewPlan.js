import React from "react";
import { useNavigate } from "react-router-dom";

const AddNewPlan = ({ page, setPage, plansPage, setPlansPage }) => {
  const navigate = useNavigate();

  return (
    <div className='main-content'>
      <div className='container-fluid'>
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
                    setPlansPage("mgt");
                  }}
                >
                  <i className='fa fa-chevron-right font-xs'></i>
                  <span className='font-xs pl-2 f-weight-500 mt-1'>
                    Price Management
                  </span>
                </li>
                <li
                  className='mr-2'
                  onClick={(e) => {
                    setPlansPage("addnew-1");
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
              <h5>Create a new Subscription Plan</h5>
            </div>
          </div>
        </div>
        <div className='row mb-5'>
          <div className='col-xl-5 col-md-8 d-flex justify-content-between align-item-center mt-3 basic-info'>
            <div className='d-flex align-item-center ml-2 basic-info-inner'>
              <div className='circle purple d-flex justify-content-center align-item-center'>
                <span className='text-white'>1</span>
              </div>
              <h6 className='mt-2 ml-2'>Plans Basic Details</h6>
            </div>
            <div className='d-flex mr-2'>
              <div className='circle white d-flex justify-content-center align-item-center m-2'>
                <span>2</span>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xl-5 col-md-8'>
            <div className='custom-card mb-3'>
              <form className='add-user-form pt-3'>
                <div className='form-group position-relative mb-4 pl-3 pr-3'>
                  <label htmFor='planName'>Plan Name</label>
                  <input
                    className='form_input_fields'
                    type='text'
                    name='planName'
                    placeholder='Tiny Balls'
                  />
                </div>
                <div className='form-group position-relative mb-4 pl-3 pr-3'>
                  <textarea
                    className='form_textarea_fields pl-4 pt-3 w-100'
                    placeholder='lorem lorem lorem lorem'
                    name='userBio'
                  ></textarea>
                </div>
                <div className='form-group position-relative mb-4 pl-3 pr-3'>
                  <label htmFor='gender'>Payment Plan Type</label>
                  <select
                    className='form_input_fields bg-transparent'
                    type='select'
                    name='gender'
                  >
                    <option>Subscription</option>
                  </select>
                  <i className='fa fa-angle-down position-absolute form-select-dropdown'></i>
                </div>
                <div className='form-group position-relative mb-4 pl-3 pr-3'>
                  <label htmFor='price'>Price(in Token)</label>
                  <input
                    className='form_input_fields'
                    type='text'
                    name='price'
                    placeholder='₦3,405'
                  />
                  <div
                    className='position-absolute pt-3 d-flex'
                    style={{ top: "0", right: "30px", gap: "5px" }}
                  >
                    <div
                      className='mt-1 mr-4'
                      style={{
                        width: "1px",
                        height: "25px",
                        backgroundColor: "#f2f2f2",
                      }}
                    ></div>
                    <div>
                      <p className='font-sm2 m-0 f-weight-600'>125</p>
                      <p className='font-sm pb-3'>Value</p>
                    </div>
                  </div>
                </div>
                <div className='form-group mb-4 px-3'>
                  <h6 className='mb-3 f-weight-600 mt-4'>
                    Select color option
                  </h6>
                  <div className='mb-3' style={{ overflowX: "auto" }}>
                    <div className='color-grid'>
                      <a href='#' className='color-grid-item active'></a>
                      <a href='#' className='color-grid-item'></a>
                      <a href='#' className='color-grid-item'></a>
                      <a href='#' className='color-grid-item'></a>
                      <a href='#' className='color-grid-item'></a>
                      <a href='#' className='color-grid-item'></a>
                      <a href='#' className='color-grid-item'></a>
                      <a href='#' className='color-grid-item'></a>
                    </div>
                  </div>
                </div>
                <div className='form-group mt-4'>
                  <label htmFor='submit'></label>
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
      </div>
    </div>
  );
};

export default AddNewPlan;
