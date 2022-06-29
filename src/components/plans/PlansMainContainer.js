import React, { useState } from "react";
import Header from "../dashboard/main/header/Header";
import SinglePlan from "./sub/singleplan/SinglePlan";
import PlansMain from "./PlansMain";
import AddNewPlan from "./sub/AddNewPlan";

const PlansMainContainer = ({
  page,
  setPage,
  showNav,
  setShowNav,
  showBtn,
  setShowBtn,
  plansPage,
  setPlansPage,
}) => {
  return (
    <main className='main-section'>
      <Header
        page={page}
        setPage={setPage}
        showNav={showNav}
        setShowNav={setShowNav}
      />
      {plansPage == "mgt" && (
        <PlansMain
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          plansPage={plansPage}
          setPlansPage={setPlansPage}
        />
      )}
      {(plansPage == "single" || plansPage == "single-2") && (
        <SinglePlan
          page={page}
          setPage={setPage}
          plansPage={plansPage}
          setPlansPage={setPlansPage}
        />
      )}
      {(plansPage == "addnew-1" ||
        plansPage == "addnew-2" ||
        plansPage == "addnew-3") && (
        <AddNewPlan
          page={page}
          setPage={setPage}
          plansPage={plansPage}
          setPlansPage={setPlansPage}
        />
      )}
    </main>
  );
};

export default PlansMainContainer;
