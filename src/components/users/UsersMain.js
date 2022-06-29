import React from "react";
import UsersBreadCrumb from "./UsersBreadCrumb";
import UsersListContainer from "./UsersListContainer";
import UsersStatArea from "./UsersStatArea";
import UsersSubNav from "./UsersSubNav";
import { useState, useEffect } from "react";
const UsersMain = ({
  page,
  setPage,
  showBtn,
  setShowBtn,
  usersPage,
  setUsersPage,
  usersList,
  usersNumber,
}) => {
  return (
    <div className='main-content'>
      <div className='container-fluid'>
        <UsersBreadCrumb
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          usersPage={usersPage}
          setUsersPage={setUsersPage}
        />
        <UsersSubNav showBtn={showBtn} setShowBtn={setShowBtn} />
        <UsersStatArea usersNumber={usersNumber} />
        <UsersListContainer
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          usersPage={usersPage}
          setUsersPage={setUsersPage}
          usersList={usersList}
        />
      </div>
    </div>
  );
};

export default UsersMain;
