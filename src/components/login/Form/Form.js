import React, { useState, useEffect } from "react";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import Button from "./Button";
import FormBottom from "./FormBottom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Form = ({
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
  setShowLodal,
}) => {
  const navigate = useNavigate();
  let myArray = [];
  let img = "";
  let token = "";

  useEffect(() => {
    if (
      (localStorage.getItem("token") || sessionStorage.getItem("token")) &&
      (localStorage.getItem("img") || sessionStorage.getItem("img")) &&
      (localStorage.getItem("pages") || sessionStorage.getItem("pages"))
    ) {
      setPage("dashboard");
      navigate("/dashboard");
    }
  }, []);

  function loginFunction() {
    setShowLodal(true);
    fetchData().catch((error) => {
      console.error("oops!,failed to connect, try again later");
    });
  }
  async function fetchData() {
    const item = {
      userName: email,
      password: password,
    };
    let result = await fetch(
      "https://thrybe.azurewebsites.net/api/BackofficeUser/LoginUser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      }
    );
    result = await result.json();
    if (result.jwtToken) {
      myArray = result.userPermission.map((i) => i.pageName);
      myArray.toString();
      img = result.picture;
      token = result.jwtToken;
      if (remember) {
        localStorage.setItem("pages", myArray);
        localStorage.setItem("img", img);
        localStorage.setItem("token", token);
        navigate("/dashboard");
      } else {
        sessionStorage.setItem("pages", myArray);
        sessionStorage.setItem("img", img);
        sessionStorage.setItem("token", token);
        navigate("/dashboard");
      }
    } else {
      toast.error("incorrect login details");
      setEmail("");
      setPassword("");
    }
  }

  return (
    <div className='login-form'>
      <form action=''>
        <EmailInput email={email} setEmail={setEmail} />
        <PasswordInput password={password} setPassword={setPassword} />
        <Button
          page={page}
          setPage={setPage}
          showModal={showModal}
          setShowModal={setShowModal}
          loginFunction={loginFunction}
        />
        <FormBottom
          remember={remember}
          setRemember={setRemember}
          page={page}
          setPage={setPage}
        />
        <ToastContainer />
      </form>
    </div>
  );
};

export default Form;
