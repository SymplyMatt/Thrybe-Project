import React from "react";
import PlansList from "./PlansList";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const PlansListContainer = ({
  page,
  setPage,
  showBtn,
  setShowBtn,
  plansPage,
  setPlansPage,
}) => {
  const navigate = useNavigate();
  let [token, setToken] = useState(" ");
  let [result, setResult] = useState([]);
  let [showResult, setShowResult] = useState(false);

  return (
    <div className='row'>
      <div className='col-12 mb-3'>
        <div className='custom-card'>
          <div className='plans-table-div table-responsive'>
            <table className='table table-borderless plans-table'>
              <thead>
                <tr>
                  <th></th>
                  <th colSpan='2'>Price Name</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Duration</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <PlansList
                  showBtn={showBtn}
                  setShowBtn={setShowBtn}
                  plansPage={plansPage}
                  setPlansPage={setPlansPage}
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlansListContainer;
