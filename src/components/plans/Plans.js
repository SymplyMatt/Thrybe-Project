import React, { useEffect, useState } from "react";
import SideNav from "../dashboard/sidenav/SideNav";
import PlansMainContainer from "./PlansMainContainer";

const Plans = ({ page, setPage, showNav, setShowNav }) => {
  const [showBtn, setShowBtn] = useState(true);
  const [plansPage, setPlansPage] = useState("mgt");
  useEffect(() => {
    document.title = "Plans Management";
    setPage("plans");
  });
  useEffect(() => {
    setPlansPage("mgt");
  }, [page]);
  useEffect(() => {
    setShowNav(false);
  }, [page]);
  return (
    <>
      <SideNav
        page={page}
        setPage={setPage}
        showNav={showNav}
        setShowNav={setShowNav}
      />
      <PlansMainContainer
        page={page}
        setPage={setPage}
        showNav={showNav}
        setShowNav={setShowNav}
        showBtn={showBtn}
        setShowBtn={setShowBtn}
        plansPage={plansPage}
        setPlansPage={setPlansPage}
      />
    </>
  );
};

export default Plans;
