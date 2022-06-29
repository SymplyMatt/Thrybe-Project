import React from "react";
import StoreList from "./StoreList";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Store from "./Store";

const StoreListContainer = ({
  page,
  setPage,
  showBtn,
  setShowBtn,
  storePage,
  setStorePage,
}) => {
  const navigate = useNavigate();
  let [token, setToken] = useState(" ");
  let [result, setResult] = useState([]);
  let [showResult, setShowResult] = useState(false);

  return (
    <div className='row'>
      <div className='col-12 mb-3'>
        <div className='custom-card'>
          <table className='table table-borderless users-table'>
            <thead>
              <tr>
                <th></th>
                <th colSpan='2'>Image</th>
                <th>Gift Name</th>
                <th>Gift Value</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <StoreList
                showBtn={showBtn}
                setShowBtn={setShowBtn}
                storePage={storePage}
                setStorePage={setStorePage}
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StoreListContainer;
