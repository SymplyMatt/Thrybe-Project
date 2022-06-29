import React from "react";
import { useNavigate } from "react-router-dom";
const AddNewGame = ({ page, setPage, gamesPage, setGamesPage }) => {
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
                    setGamesPage("mgt");
                  }}
                >
                  <i className='fa fa-chevron-right font-xs'></i>
                  <span className='font-xs pl-2 f-weight-500 mt-1'>
                    Thrybe Games
                  </span>
                </li>
                <li
                  className='mr-2'
                  onClick={(e) => {
                    setGamesPage("addnew-1");
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
              <h5>Create a new Thrybe Game</h5>
            </div>
          </div>
        </div>

        {gamesPage == "addnew-1" && (
          <>
            <div className='row mb-5'>
              <div className='col-xl-5 col-md-8 d-flex justify-content-between align-item-center mt-3 basic-info'>
                <div className='d-flex align-item-center ml-2 basic-info-inner'>
                  <div className='circle purple d-flex justify-content-center align-item-center'>
                    <span className='text-white'>1</span>
                  </div>
                  <h6 className='mt-2 ml-2'>Game’s Basic Details</h6>
                </div>
                <div className='d-flex mr-2'>
                  <div
                    className='circle white d-flex justify-content-center align-item-center m-2'
                    onClick={() => {
                      setGamesPage("addnew-2");
                    }}
                  >
                    <span>2</span>
                  </div>
                  <div
                    className='circle white d-flex justify-content-center align-item-center m-2'
                    onClick={() => {
                      setGamesPage("addnew-3");
                    }}
                  >
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
                      <label htmlFor='firstName'>Game Name</label>
                      <input
                        className='form_input_fields'
                        type='text'
                        name='firstName'
                        placeholder='e.g Ball of Rush'
                      />
                    </div>
                    <div className='px-3'>
                      <div className='poster-div py-3 h-auto font-sm2 mb-4'>
                        Mauris convallis, leo eget dignissim semper, orci ipsum
                        maximus dolor.
                      </div>
                    </div>
                    <div className='form-group position-relative mb-4 pl-3 pr-3'>
                      <label htmlFor='privacy'>Game Type</label>
                      <select
                        className='form_input_fields bg-transparent'
                        type='select'
                        name='privacy'
                      >
                        <option>Q/A</option>
                        <option>Public</option>
                      </select>
                      <i className='fa fa-angle-down position-absolute form-select-dropdown'></i>
                    </div>
                    <hr />
                    <div className='form-group mb-4 px-3'>
                      <h6 className='mb-2 f-weight-600 mt-4'>
                        Upload Game Icon
                      </h6>
                      <a href='#' id='upload-img'>
                        <img
                          src='./assets/images/upload-gift-main.svg'
                          className='img-fluid'
                          style={{ width: "100%" }}
                          alt=''
                        />
                      </a>
                      <input
                        type='file'
                        id='file_upload'
                        style={{ display: "none" }}
                      />
                    </div>
                    <hr />
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
                    <div
                      className='form-group mt-4 px-3'
                      onClick={(e) => {
                        e.preventDefault();
                        setGamesPage("addnew-2");
                      }}
                    >
                      <label htmlFor='submit'></label>
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

        {gamesPage == "addnew-2" && (
          <>
            <div className='row mb-5'>
              <div className='col-xl-5 col-md-8 d-flex justify-content-between align-item-center mt-3 basic-info'>
                <div className='d-flex align-item-center ml-2 basic-info-inner'>
                  <div
                    className='circle purple d-flex justify-content-center align-items-center'
                    onClick={() => {
                      setGamesPage("addnew-1");
                    }}
                  >
                    <i className='fa fa-check text-white'></i>
                  </div>
                  <div className='circle num2 purple d-flex justify-content-center align-item-center ml-2 '>
                    <span>2</span>
                  </div>
                  <h6 className='mt-2 ml-2'>Create Questions</h6>
                </div>
                <div className='d-flex mr-2'>
                  <div
                    className='circle white d-flex justify-content-center align-item-center m-2'
                    onClick={() => {
                      setGamesPage("addnew-3");
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
                    <div className='form-group mb-4 px-3'>
                      <h6 className='mb-3 f-weight-600 mt-4'>
                        Upload Question Image
                      </h6>
                      <a href='#' id='upload-img'>
                        <img
                          src='./assets/images/upload-gift-main.svg'
                          className='img-fluid'
                          style={{ width: "100%" }}
                          alt=''
                        />
                      </a>
                      <input
                        type='file'
                        id='file_upload'
                        style={{ display: "none" }}
                      />
                    </div>
                    <div className='form-group position-relative mb-4 pl-3 pr-3'>
                      <label htmlFor='firstName'>Question</label>
                      <input
                        className='form_input_fields'
                        type='text'
                        name='firstName'
                        placeholder='e.g Who is the president of Nigeria?'
                      />
                    </div>
                    <div className='form-group position-relative mb-4 pl-3 pr-3'>
                      <label htmlFor='firstName'>Main Answer</label>
                      <input
                        className='form_input_fields'
                        type='text'
                        name='firstName'
                        placeholder='e.g Buhari'
                      />
                    </div>
                    <div className='form-group position-relative mb-4 pl-3 pr-3'>
                      <label htmlFor='firstName'>False Answers 1</label>
                      <input
                        className='form_input_fields'
                        type='text'
                        name='firstName'
                        placeholder='e.g Olowogboro'
                      />
                    </div>
                    <div className='px-3 mb-4'>
                      <button className='btn btn-add-more'>
                        Add More False Answers
                      </button>
                    </div>
                    <div className='px-3'>
                      <div className='form-row'>
                        <div className='col-lg-6 mb-3'>
                          <div className='form-group'>
                            <button className='btn btn-continue font-sm'>
                              Add more Questions
                            </button>
                          </div>
                        </div>
                        <div className='col-lg-6 mb-3'>
                          <div
                            className='form-group'
                            onClick={(e) => {
                              e.preventDefault();
                              setGamesPage("addnew-3");
                            }}
                          >
                            <input
                              type='submit'
                              className='btn btn-continue'
                              value='Continue'
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </>
        )}

        {gamesPage == "addnew-3" && (
          <>
            <div className='row mb-5'>
              <div className='col-md-6 d-flex align-item-center mt-3 basic-info'>
                <div className='d-flex align-item-center ml-2 basic-info-inner'>
                  <div
                    className='circle purple d-flex justify-content-center align-item-center mb-2'
                    onClick={() => {
                      setGamesPage("addnew-1");
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
                      setGamesPage("addnew-2");
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
                  </div>
                  <div className='mt-2 mb-4 px-3'>
                    <h5 className='f-weight-600 mb-2'>Tiny Balls</h5>
                  </div>
                  <div className='mt-4 mb-2 px-3'>
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
                  <div className='px-3 mb-4'>
                    <div className='custom-card'>
                      <p className='f-weight-600'>Question 1</p>
                      <h6 className='f-weight-600 mt-3'>
                        Who is the President of Nigeria?
                      </h6>
                      <div className='table-responsive mt-3'>
                        <table className='table table-borderless table-addGame'>
                          <tbody>
                            <tr>
                              <td>Main Answer</td>
                              <td className='text-right'>Mohammadu Buhari</td>
                            </tr>
                            <tr>
                              <td>False Answer 1</td>
                              <td className='text-right'>Gen. Sanni Abacha</td>
                            </tr>
                            <tr>
                              <td>False Answer 2</td>
                              <td className='text-right'>Olusegun Obasanjo</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className='px-3'>
                    <div className='form-row'>
                      <div className='col-lg-6 mb-3'>
                        <div className='form-group'>
                          <button className='btn btn-continue font-sm'>
                            Back
                          </button>
                        </div>
                      </div>
                      <div className='col-lg-6 mb-3'>
                        <div className='form-group'>
                          <input
                            type='submit'
                            className='btn btn-continue'
                            value='Continue'
                          />
                        </div>
                      </div>
                    </div>
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

export default AddNewGame;
