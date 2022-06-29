import React from 'react'
import { useNavigate } from 'react-router-dom';

const AddNewUserThree = ({ page, setPage, usersPage, setUsersPage }) => {
    const navigate = useNavigate();

  return (
        <div className="main-content">
            <div className="container-fluid">
                <div className="row mb-3">
                    <div className="col-12 mt-5">
                        <div className="d-flex align-item-center">
                            <ul className="d-flex">
                                <li className="mr-2" onClick={(e) => {
                                setPage('login');
                                navigate('/')
                                }}>
                                    <i className="fa fa-home"></i
                                    ><span className="font-xs pl-2 f-weight-500 mt-1">Home</span>
                                </li>
                                <li className="mr-2" onClick={()=>setUsersPage('mgt')}>
                                    <i className="fa fa-chevron-right font-xs"></i>
                                    <span className="font-xs pl-2 f-weight-500 mt-1"
                                        >Users Management</span
                                    >
                                </li>
                                <li className="mr-2">
                                    <i className="fa fa-chevron-right font-xs"></i>
                                    <span className="font-xs pl-2 f-weight-500 mt-1"
                                        ><strong>Create New</strong></span
                                    >
                                </li>
                            </ul>
                        </div>
                        <div className="mt-4 d-flex align-items-center">
                            <h5>Add a New User</h5>
                        </div>
                    </div>
                </div>
                <div className="row mb-5">
                    <div
                        className="col-xl-5 col-md-6 col-md-8 d-flex justify-content-between align-item-center mt-3 basic-info"
                    >
                        <div className="d-flex align-item-center ml-2 basic-info-inner">
                            <div
                                className="circle purple d-flex justify-content-center align-items-center" onClick={() => {
                                    setUsersPage('addnew-1')
                                    }}
                            >
                                <i className="fa fa-check text-white"></i>
                            </div>
                            <div
                                className="circle purple d-flex justify-content-center align-items-center ml-2" onClick={() => {
                                    setUsersPage('addnew-2')
                                    }}
                            >
                                <i className="fa fa-check text-white"></i>
                            </div>
                            <div
                                className="circle purple d-flex justify-content-center align-item-center ml-2"
                            >
                                <span>3</span>
                            </div>
                            <h6 className="mt-2 ml-2">Likes and Hobbies</h6>
                        </div>
                        <div className="d-flex mr-2">
                            <div
                                className="circle white d-flex justify-content-center align-item-center m-2" onClick={() => {
                                    setUsersPage('addnew-4')
                                    }}
                            >
                                <span>4</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-5 col-md-8">
                        <div className="custom-card">
                            <form>
                                <div className="form-group position-relative mb-5 pl-3 pr-3">
                                    <label className="f-weight-600 mb-3">My Basics</label><br />
                                    <p className="mb-4 font-sm2">
                                        Everything you want other to know about you
                                    </p>
                                    <div className="d-flex justify-content-between">
                                        <span className="font-sm"
                                            ><img
                                                src="./assets/images/industry-icon.svg"
                                                className="img-fluid mr-2"
                                                alt="industry"
                                            />Religion</span
                                        >
                                        <a href="#" className="font-sm text-dark f-weight-600"
                                            >Select <i className="fa fa-angle-right ml-2"></i
                                        ></a>
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <span className="font-sm"
                                            ><img
                                                src="./assets/images/horoscope-icon.svg"
                                                className="img-fluid mr-2"
                                                alt="industry"
                                            />Horoscope</span
                                        >
                                        <a href="#" className="font-sm text-dark f-weight-600"
                                            >Select <i className="fa fa-angle-right ml-2"></i
                                        ></a>
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <span className="font-sm"
                                            ><img
                                                src="./assets/images/interestedIn-icon.svg"
                                                className="img-fluid mr-2"
                                                alt="industry"
                                            />Interested in</span
                                        >
                                        <a href="#" className="font-sm text-dark f-weight-600"
                                            >Select <i className="fa fa-angle-right ml-2"></i
                                        ></a>
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <span className="font-sm d-flex align-items-center"
                                            ><i
                                                className="fa fa-heart-o mr-2"
                                                style={{fontSize: '18px'}}
                                            ></i>
                                            Seeking</span
                                        >
                                        <a href="#" className="font-sm text-dark f-weight-600"
                                            >Select<i className="fa fa-angle-right ml-2"></i
                                        ></a>
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <span className="font-sm"
                                            ><img
                                                src="./assets/images/kids-icon.svg"
                                                className="img-fluid mr-2"
                                                alt="industry"
                                            />Wants Kids</span
                                        >
                                        <a href="#" className="font-sm text-dark f-weight-600"
                                            >Select<i className="fa fa-angle-right ml-2"></i
                                        ></a>
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <span className="font-sm"
                                            ><img
                                                src="./assets/images/smoking-icon.svg"
                                                className="img-fluid mr-2"
                                                alt="industry"
                                            />Smoking</span
                                        >
                                        <a href="#" className="font-sm text-dark f-weight-600"
                                            >Select<i className="fa fa-angle-right ml-2"></i
                                        ></a>
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <span className="font-sm"
                                            ><img
                                                src="./assets/images/beerIcon.svg"
                                                className="img-fluid mr-2"
                                                alt="industry"
                                            />Drinking</span
                                        >
                                        <a href="#" className="font-sm text-dark f-weight-600"
                                            >Select<i className="fa fa-angle-right ml-2"></i
                                        ></a>
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <span className="font-sm"
                                            ><img
                                                src="./assets/images/education-icon.svg"
                                                className="img-fluid mr-2"
                                                alt="industry"
                                            />Education</span
                                        >
                                        <a href="#" className="font-sm text-dark f-weight-600"
                                            >Select<i className="fa fa-angle-right ml-2"></i
                                        ></a>
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <span className="font-sm"
                                            ><img
                                                src="./assets/images/Location.svg"
                                                className="img-fluid mr-2"
                                                alt="industry"
                                            />Location</span
                                        >
                                        <a href="#" className="font-sm text-dark f-weight-600"
                                            >Select<i className="fa fa-angle-right ml-2"></i
                                        ></a>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="mb-3">
                                        <h5 className="f-weight-600 mb-2">Hobbies</h5>
                                        <p className="mb-3 font-sm2">
                                            Let People know about what this user loves
                                        </p>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 mb-3">
                                            <a href="#" className="custom-card-sm">
                                                <img src="./assets/images/allGiftsIcon.svg" />
                                                <p className="pl-2 font-sm2 text-dark mb-0">Shopping</p>
                                            </a>
                                        </div>
                                        <div className="col-lg-4 col-md-6 mb-3">
                                            <a href="#" className="custom-card-sm">
                                                <img src="./assets/images/art-icon.svg" />
                                                <p className="pl-2 font-sm2 text-dark mb-0">Art</p>
                                            </a>
                                        </div>
                                        <div className="col-lg-4 col-md-6 mb-3">
                                            <a href="#" className="custom-card-sm">
                                                <img src="./assets/images/yoga-icon.svg" />
                                                <p className="pl-2 font-sm2 text-dark mb-0">Yoga</p>
                                            </a>
                                        </div>
                                        <div className="col-lg-4 col-md-6 mb-3">
                                            <a href="#" className="custom-card-sm">
                                                <img src="./assets/images/allTalksIcon.svg" />
                                                <p className="pl-2 font-sm2 text-dark mb-0">Karaoke</p>
                                            </a>
                                        </div>
                                        <div className="col-lg-4 col-md-6 mb-3">
                                            <a href="#" className="custom-card-sm">
                                                <img src="./assets/images/hiking-icon.svg" />
                                                <p className="pl-2 font-sm2 text-dark mb-0">Hiking</p>
                                            </a>
                                        </div>
                                        <div className="col-lg-4 col-md-6 mb-3">
                                            <a href="#" className="custom-card-sm">
                                                <img src="./assets/images/music-icon.svg" />
                                                <p className="pl-2 font-sm2 text-dark mb-0">Music</p>
                                            </a>
                                        </div>
                                        <div className="col-lg-4 col-md-6 mb-3">
                                            <a href="#" className="custom-card-sm">
                                                <img src="./assets/images/cooking-icon.svg" />
                                                <p className="pl-2 font-sm2 text-dark mb-0">Cooking</p>
                                            </a>
                                        </div>
                                        <div className="col-lg-4 col-md-6 mb-3">
                                            <a href="#" className="custom-card-sm">
                                                <img src="./assets/images/football-icon.svg" />
                                                <p className="pl-2 font-sm2 text-dark mb-0">Football</p>
                                            </a>
                                        </div>
                                        <div className="col-lg-4 col-md-6 mb-3">
                                            <a href="#" className="custom-card-sm">
                                                <img src="./assets/images/music-icon.svg" />
                                                <p className="pl-2 font-sm2 text-dark mb-0">Movie</p>
                                            </a>
                                        </div>
                                        <div className="col-lg-6 mb-3">
                                            <a href="#" className="custom-card-sm">
                                                <img src="./assets/images/swimming-icon.svg" />
                                                <p className="pl-2 font-sm2 text-dark mb-0">Swimming</p>
                                            </a>
                                        </div>
                                        <div className="col-lg-6 mb-3">
                                            <a href="#" className="custom-card-sm">
                                                <img src="./assets/images/traveling-icon.svg" />
                                                <p className="pl-2 font-sm2 text-dark mb-0">Travelling</p>
                                            </a>
                                        </div>
                                        <div className="col-lg-6 mb-3">
                                            <a href="#" className="custom-card-sm">
                                                <img src="./assets/images/photography-icon.svg" />
                                                <p className="pl-2 font-sm2 text-dark mb-0">
                                                    Photography
                                                </p>
                                            </a>
                                        </div>
                                        <div className="col-lg-6 mb-3">
                                            <a href="#" className="custom-card-sm">
                                                <img src="./assets/images/adventure-icon.svg" />
                                                <p className="pl-2 font-sm2 text-dark mb-0">Adventure</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mt-4 px-3">
                                    <label htmlFor="submit"></label>
                                    <input
                                        type="submit"
                                        className="btn btn-continue"
                                        value="Continue"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default AddNewUserThree