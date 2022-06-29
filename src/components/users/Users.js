import React, { useEffect, useState } from "react";
import SideNav from "../dashboard/sidenav/SideNav";
import UsersMainContainer from "./UsersMainContainer";
import { useNavigate } from "react-router-dom";
import Loader from "../loader/Loader";

const Users = ({ page, setPage, showNav, setShowNav }) => {
  const [showBtn, setShowBtn] = useState(true);
  const [usersPage, setUsersPage] = useState("mgt");
  const navigate = useNavigate();
  let [token, setToken] = useState(" ");
  let [usersList, setUsersList] = useState([]);
  let [usersNumber, setUsersNumber] = useState("...");
  let [showResult, setShowResult] = useState(false);
  const [allUsers, setAllUsers] = useState(false);
  const [activeUsers, setActiveUsers] = useState(false);
  const [pendingUsers, setPendingUsers] = useState(false);
  const [inactiveUsers, setInactiveUsers] = useState(false);
  const [allUsersList, setAllUsersList] = useState(false);
  useEffect(() => {
    document.title = "Users Management";
    setPage("users");
  });
  useEffect(() => {
    setUsersPage("mgt");
  }, [page]);
  useEffect(() => {
    setShowNav(false);
  }, [page]);

  useEffect(() => {
    setToken(localStorage.getItem("token") || sessionStorage.getItem("token"));
    if (!token) {
      setPage("login");
      navigate("/login");
    }
  }, [page]);

  useEffect(() => {
    if (token && token != " ") {
      fetchData().catch((error) => {
        console.error(error);
        setTimeout(() => {
          sessionStorage.removeItem("token");
          sessionStorage.removeItem("img");
          sessionStorage.removeItem("pages");
          navigate("/login");
        }, 1500);
      });
    }
  }, [page, token]);

  async function fetchData() {
    let results = await fetch(
      "https://thrybe.azurewebsites.net/api/BackofficeUser/UserList",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    results = await results.json();
    setUsersList(results);
    setShowResult(true);
    setAllUsersList(true);
  }

  useEffect(() => {
    if (token && token != " ") {
      fetchUsersNumber().catch((error) => {
        console.error(error);
        setTimeout(() => {
          sessionStorage.removeItem("token");
          sessionStorage.removeItem("img");
          sessionStorage.removeItem("pages");
          navigate("/login");
        }, 1500);
      });
    }
  }, [page, token]);

  async function fetchUsersNumber() {
    let results = await fetch(
      "https://thrybe.azurewebsites.net/api/BackofficeUser/AllUsers",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    results = await results.json();
    setUsersNumber(results);
    setAllUsers(true);
  }

  return (
    <>
      <div className={`${allUsers && allUsersList ? "show" : "not-show"}`}>
        <SideNav
          page={page}
          setPage={setPage}
          showNav={showNav}
          setShowNav={setShowNav}
        />
      </div>
      <div className={`${allUsers && allUsersList ? "show" : "not-show"}`}>
        <UsersMainContainer
          page={page}
          setPage={setPage}
          showNav={showNav}
          setShowNav={setShowNav}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          usersPage={usersPage}
          setUsersPage={setUsersPage}
          usersList={usersList}
          usersNumber={usersNumber}
          showResult={showResult}
        />
      </div>
      <div className={`${allUsers && allUsersList ? "not-show" : "show"}`}>
        <Loader />
      </div>
    </>
  );
};

export default Users;
