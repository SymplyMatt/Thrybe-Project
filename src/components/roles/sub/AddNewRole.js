import React from "react";

const AddNewRole = ({ showBtn, setShowBtn, rolesPage, setRolesPage }) => {
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
                    Roles Management
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
              <h5>Roles Manangement</h5>
            </div>
          </div>
        </div>
        {rolesPage == "addnew-1" && (
          <>
            <div className='row mb-5'>
              <div className='col-md-6 d-flex justify-content-between align-item-center mt-3 basic-info'>
                <div className='d-flex align-item-center ml-2 basic-info-inner'>
                  <div className='circle purple d-flex justify-content-center align-item-center'>
                    <span className='text-white'>1</span>
                  </div>
                  <h6 className='mt-2 ml-2'>Role Information</h6>
                </div>
                <div className='d-flex mr-2'>
                  <div
                    className='circle white d-flex justify-content-center align-item-center m-2'
                    onClick={(e) => {
                      setRolesPage("addnew-2");
                    }}
                  >
                    <span>2</span>
                  </div>
                  <div
                    className='circle white d-flex justify-content-center align-item-center m-2'
                    onClick={(e) => {
                      setRolesPage("addnew-3");
                    }}
                  >
                    <span>3</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='custom-card col-md-6 ml-3'>
                <form className='add-user-form'>
                  <div className='form-group position-relative mb-4 pl-3 pr-3 mt-4'>
                    <label for='talkTitle'>Role name</label>
                    <input
                      className='form_input_fields'
                      type='text'
                      name='talkTitle'
                      placeholder='How to date Chinese women successfully'
                    />
                  </div>
                  <div className='form-group position-relative mb-4 pl-3 pr-3'>
                    <label for='privacy'>Role Type</label>
                    <select
                      className='form_input_fields bg-transparent'
                      type='select'
                      name='privacy'
                    >
                      <option>Custom</option>
                      <option>Closed</option>
                    </select>
                    <i className='fa fa-angle-down position-absolute form-select-dropdown'></i>
                  </div>
                  <div className='form-group position-relative mb-4 pl-3 pr-3'>
                    <label for='talk'></label>
                    <textarea
                      className='form_textarea_fields pl-4 pt-3 w-100'
                      placeholder='Lorem ipsum Lorem Ipsum '
                      name='talk'
                    ></textarea>
                  </div>
                  <div
                    className='mb-4 px-3 color-grid'
                    style={{ overflowX: "auto" }}
                  >
                    <div className='card-group2'>
                      <div>
                        <img src='./assets/images/frankavatar.svg' alt='' />
                        <span className='font-sm2 f-weight-600 ml-2'>
                          Frank Rivers
                        </span>
                      </div>
                      <input type='checkbox' checked />
                    </div>
                    <div className='card-group2'>
                      <div>
                        <img src='./assets/images/frankavatar.svg' alt='' />
                        <span className='font-sm2 f-weight-600 ml-2'>
                          Frank Rivers
                        </span>
                      </div>
                      <input type='checkbox' checked />
                    </div>
                    <div className='card-group2'>
                      <div>
                        <img src='./assets/images/frankavatar.svg' alt='' />
                        <span className='font-sm2 f-weight-600 ml-2'>
                          Frank Rivers
                        </span>
                      </div>
                      <input type='checkbox' checked />
                    </div>
                    <div className='card-group2'>
                      <div>
                        <img src='./assets/images/frankavatar.svg' alt='' />
                        <span className='font-sm2 f-weight-600 ml-2'>
                          Frank Rivers
                        </span>
                      </div>
                      <input type='checkbox' checked />
                    </div>
                    <div className='card-group2'>
                      <div>
                        <img src='./assets/images/frankavatar.svg' alt='' />
                        <span className='font-sm2 f-weight-600 ml-2'>
                          Frank Rivers
                        </span>
                      </div>
                      <input type='checkbox' checked />
                    </div>
                  </div>
                  <div className='px-3'>
                    <button className='btn btn-add-more'>
                      + Add more Users
                    </button>
                  </div>
                  <div
                    className='form-group mt-4'
                    onClick={(e) => {
                      e.preventDefault();
                      setRolesPage("addnew-2");
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
          </>
        )}
        {rolesPage == "addnew-2" && (
          <>
            <div className='row mb-5'>
              <div className='col-xl-5 col-md-8 d-flex justify-content-between align-item-center mt-3 basic-info'>
                <div className='d-flex align-item-center ml-2 basic-info-inner'>
                  <div
                    className='circle purple d-flex justify-content-center align-items-center'
                    onClick={(e) => {
                      setRolesPage("addnew-1");
                    }}
                  >
                    <i className='fa fa-check text-white'></i>
                  </div>
                  <div
                    className='circle num2 purple d-flex justify-content-center align-item-center ml-2'
                    onClick={(e) => {
                      setRolesPage("addnew-2");
                    }}
                  >
                    <span>2</span>
                  </div>
                  <h6 className='mt-2 ml-2'>Priviledges</h6>
                </div>
                <div className='d-flex mr-2'>
                  <div
                    className='circle white d-flex justify-content-center align-item-center m-2'
                    onClick={(e) => {
                      setRolesPage("addnew-3");
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
                  <form className='add-user-form'>
                    <div className='px-3 mt-3'>
                      <h6 for='userBio' className='mb-3 f-weight-600'>
                        Administrative Privileges
                      </h6>
                      <ul
                        style={{ listStyleType: "none" }}
                        className='privileges-list'
                      >
                        <li>
                          <input type='checkbox' />
                          <h6 className='ml-3 mb-0'>Role Privilege 1</h6>
                        </li>
                        <li>
                          <input type='checkbox' />
                          <h6 className='ml-3 mb-0'>Role Privilege 2</h6>
                        </li>
                        <li>
                          <input type='checkbox' />
                          <h6 className='ml-3 mb-0'>Role Privilege 3</h6>
                        </li>
                        <li>
                          <input type='checkbox' />
                          <h6 className='ml-3 mb-0'>Role Privilege 4</h6>
                        </li>
                      </ul>
                    </div>
                    <div className='px-3 mt-5'>
                      <h6 for='userBio' className='mb-3 f-weight-600'>
                        Administrative Privileges
                      </h6>
                      <ul
                        style={{ listStyleType: "none" }}
                        className='privileges-list'
                      >
                        <li>
                          <input type='checkbox' />
                          <h6 className='ml-3 mb-0'>Role Privilege 1</h6>
                        </li>
                        <li>
                          <input type='checkbox' />
                          <h6 className='ml-3 mb-0'>Role Privilege 2</h6>
                        </li>
                        <li>
                          <input type='checkbox' />
                          <h6 className='ml-3 mb-0'>Role Privilege 3</h6>
                        </li>
                        <li>
                          <input type='checkbox' />
                          <h6 className='ml-3 mb-0'>Role Privilege 4</h6>
                        </li>
                      </ul>
                    </div>
                    <div
                      className='form-group mt-4 px-3'
                      onClick={(e) => {
                        e.preventDefault();
                        setRolesPage("addnew-3");
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
        {rolesPage == "addnew-3" && (
          <>
            <div className='row mb-5'>
              <div className='col-xl-5 col-md-6 col-md-8 d-flex justify-content-between align-item-center mt-3 basic-info'>
                <div className='d-flex align-item-center ml-2 basic-info-inner'>
                  <div
                    className='circle purple d-flex justify-content-center align-items-center'
                    onClick={(e) => {
                      setRolesPage("addnew-1");
                    }}
                  >
                    <i className='fa fa-check text-white'></i>
                  </div>
                  <div
                    className='circle purple d-flex justify-content-center align-items-center ml-2'
                    onClick={(e) => {
                      setRolesPage("addnew-2");
                    }}
                  >
                    <i className='fa fa-check text-white'></i>
                  </div>
                  <div className='circle purple d-flex justify-content-center align-item-center ml-2'>
                    <span>3</span>
                  </div>
                  <h6 className='mt-2 ml-2'>Preview</h6>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-xl-5 col-md-8'>
                <div className='custom-card'>
                  <form>
                    <div className='px-4'>
                      <div className='d-flex mt-4 justify-content-between align-items-center mb-4'>
                        <h6 className='mb-0 f-weight-600'>Role Name</h6>
                        <p className='mb-0 font-sm2'>Bets Manager</p>
                      </div>
                      <hr />
                      <div className='mt-4 mb-4'>
                        <h6 className='f-weight-600'>Description</h6>
                        <p className='font-sm'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Praesent non risus enim. Praesent nec malesuada
                          turpis. Ut porttitor nunc eget neque dapibus, et
                          pellentesque neque euismod.
                        </p>
                      </div>
                      <hr />
                      <div className='mt-4 mb-4'>
                        <h6 className='f-weight-600'>Selected Users</h6>
                        <div className='row mt-2'>
                          <div className='col-lg-3'>
                            <img
                              src='./assets/images/selectedUsersImg1.svg'
                              className='w-100'
                              alt='User'
                            />
                          </div>
                          <div className='col-lg-3'>
                            <img
                              src='./assets/images/selectedUsersImg1.svg'
                              className='img-fluid'
                              alt='User'
                            />
                          </div>
                          <div className='col-lg-3'>
                            <img
                              src='./assets/images/selectedUsersImg1.svg'
                              className='img-fluid'
                              alt='User'
                            />
                          </div>
                          <div className='col-lg-3'>
                            <div className='position-relative d-flex align-items-center justify-content-center'>
                              <img
                                src='./assets/images/selectedUsersImg1.svg'
                                className='img-fluid'
                                alt='User'
                              />
                              <div className='overlay'></div>
                              <div className='position-absolute'>
                                <h5
                                  className='text-light f-weight-600'
                                  style={{ top: "35px", left: "25px" }}
                                >
                                  +5
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                      </div>
                      <div className='mt-4 mb-4'>
                        <h6 className='f-weight-600'>Role Privileges</h6>
                        <div className='custom-card d-flex justify-content-between align-items-center mb-3 mt-4'>
                          <div className='d-flex align-items-center'>
                            <div className='ml-4'>
                              <h6 className='f-weight-600'>Role Privilege 1</h6>
                              <p className='mb-0 font-sm2'>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                              </p>
                            </div>
                          </div>
                          <a href='#'>
                            <i className='fa fa-angle-right text-dark'></i>
                          </a>
                        </div>
                        <div className='custom-card d-flex justify-content-between align-items-center mb-3'>
                          <div className='d-flex align-items-center'>
                            <div className='ml-4'>
                              <h6 className='f-weight-600'>Role Privilege 2</h6>
                              <p className='mb-0 font-sm2'>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                              </p>
                            </div>
                          </div>
                          <a href='#'>
                            <i className='fa fa-angle-right text-dark'></i>
                          </a>
                        </div>
                        <div className='custom-card d-flex justify-content-between align-items-center mb-3'>
                          <div className='d-flex align-items-center'>
                            <div className='ml-4'>
                              <h6 className='f-weight-600'>Role Privilege 3</h6>
                              <p className='mb-0 font-sm2'>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                              </p>
                            </div>
                          </div>
                          <a href='#'>
                            <i className='fa fa-angle-right text-dark'></i>
                          </a>
                        </div>
                      </div>
                      <div className='form-group mt-4 px-3'>
                        <label for='submit'></label>
                        <input
                          type='submit'
                          className='btn btn-continue'
                          value='Continue'
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AddNewRole;
