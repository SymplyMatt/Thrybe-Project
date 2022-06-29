import React from "react";
import UsersList from "./UsersList";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const UsersListContainer = ({
  page,
  setPage,
  showBtn,
  setShowBtn,
  usersPage,
  setUsersPage,
  usersList,
}) => {
  return (
    <div className='row'>
      <div className='col-12 mb-3'>
        <div className='custom-card'>
          <div className='users-table-div table-responsive'>
            <table className='table table-borderless users-table'>
              <thead>
                <tr>
                  <th></th>
                  <th colSpan='2'>User name and avatar</th>
                  <th>Email address</th>
                  <th>Location</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {usersList.length >= 1 &&
                  usersList.map((item, index) => (
                    <UsersList
                      key={index}
                      showBtn={showBtn}
                      setShowBtn={setShowBtn}
                      usersPage={usersPage}
                      setUsersPage={setUsersPage}
                      item={item}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersListContainer;
