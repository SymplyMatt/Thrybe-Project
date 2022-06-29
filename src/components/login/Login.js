import React, { useState } from "react";
import { useEffect } from "react";
import LoginContainer from "./LoginContainer";
import Modal from "./Modal/Modal";
import Loader from "../loader/Loader";
const Login = ({
  page,
  setPage,
  email,
  setEmail,
  password,
  setPassword,
  remember,
  setRemember,
  setUserDetails,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [showLoader, setShowLodal] = useState(false);
  useEffect(() => {
    setPage("login");
    document.title = "Thrybe || Login";
  });

  return (
    <div className='login_wrapper position-relative'>
      <div className={`container ${showLoader ? "not-show" : "show"}`}>
        <LoginContainer
          page={page}
          setPage={setPage}
          showModal={showModal}
          setShowModal={setShowModal}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          remember={remember}
          setRemember={setRemember}
          setUserDetails={setUserDetails}
          setShowLodal={setShowLodal}
        />
      </div>
      <div className={`${showLoader ? "show" : "not-show"}`}>
        <Loader />
      </div>
    </div>
  );
};

export default Login;
