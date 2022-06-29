import React, { useState } from "react";
import Header from "../dashboard/main/header/Header";
import AddNewUserOne from "./sub/AddNewUserOne";
import AddNewUserThree from "./sub/AddNewUserThree";
import AddNewUserTwo from "./sub/AddNewUserTwo";
import SingleUser from "./sub/singleuser/SingleUser";
import UsersMain from "./UsersMain";

const UsersMainContainer = ({
  page,
  setPage,
  showNav,
  setShowNav,
  showBtn,
  setShowBtn,
  usersPage,
  setUsersPage,
  usersList,
  usersNumber,
  showResult,
}) => {
  return (
    <main className='main-section'>
      <Header
        page={page}
        setPage={setPage}
        showNav={showNav}
        setShowNav={setShowNav}
      />
      {usersPage == "mgt" && (
        <UsersMain
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          usersPage={usersPage}
          setUsersPage={setUsersPage}
          usersList={usersList}
          usersNumber={usersNumber}
          showResult={showResult}
        />
      )}
      {usersPage == "addnew-1" && (
        <AddNewUserOne
          page={page}
          setPage={setPage}
          usersPage={usersPage}
          setUsersPage={setUsersPage}
        />
      )}
      {usersPage == "addnew-2" && (
        <AddNewUserTwo
          page={page}
          setPage={setPage}
          usersPage={usersPage}
          setUsersPage={setUsersPage}
        />
      )}
      {usersPage == "addnew-3" && (
        <AddNewUserThree
          page={page}
          setPage={setPage}
          usersPage={usersPage}
          setUsersPage={setUsersPage}
        />
      )}
      {usersPage == "single" && (
        <SingleUser
          page={page}
          setPage={setPage}
          usersPage={usersPage}
          setUsersPage={setUsersPage}
        />
      )}
    </main>
  );
};

export default UsersMainContainer;
