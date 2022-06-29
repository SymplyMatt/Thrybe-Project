import React from "react";
import RolesList from "./RolesList";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const RolesListContainer = ({
  page,
  setPage,
  showBtn,
  setShowBtn,
  rolesPage,
  setRolesPage,
}) => {
  const navigate = useNavigate();
  let [token, setToken] = useState(" ");
  let [result, setResult] = useState([]);
  let [showResult, setShowResult] = useState(false);

  return (
    <div className='row mt-4'>
      <div className='col-12 mb-3'>
        <div className='custom-card'>
          <div className='table-responsive'>
            <table className='table table-borderless table-role'>
              <thead>
                <tr>
                  <th></th>
                  <th>Role name</th>
                  <th>Description</th>
                  <th>Role Type</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <RolesList
                  showBtn={showBtn}
                  setShowBtn={setShowBtn}
                  rolesPage={rolesPage}
                  setRolesPage={setRolesPage}
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RolesListContainer;
