import React from "react";
import Form from "./Form/Form";
import Logo from "./Logo";

const LoginContainer = ({
  page,
  setPage,
  showModal,
  setShowModal,
  email,
  setEmail,
  password,
  setPassword,
  remember,
  setRemember,
  setUserDetails,
  setShowLodal,
}) => {
  return (
    <div
      className={`row justify-content-center ${showModal ? "not-show" : ""}`}
    >
      <div className='col-lg-5 col-md-6'>
        <Logo />
        <Form
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
    </div>
  );
};

export default LoginContainer;
