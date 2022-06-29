import React from "react";
import PlansBreadCrumb from "./PlansBreadCrumb";
import PlansListContainer from "./PlansListContainer";
import PlansSubNav from "./PlansSubNav";

const PlansMain = ({
  page,
  setPage,
  showBtn,
  setShowBtn,
  plansPage,
  setPlansPage,
}) => {
  return (
    <div className='main-content'>
      <div className='container-fluid'>
        <PlansBreadCrumb
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          plansPage={plansPage}
          setPlansPage={setPlansPage}
        />
        <PlansSubNav showBtn={showBtn} setShowBtn={setShowBtn} />
        <PlansListContainer
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          plansPage={plansPage}
          setPlansPage={setPlansPage}
        />
      </div>
    </div>
  );
};

export default PlansMain;
