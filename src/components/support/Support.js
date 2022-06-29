import React, { useEffect, useState } from "react";
import SideNav from "../dashboard/sidenav/SideNav";
import SupportMainContainer from "./SupportMainContainer";

const Support = ({ page, setPage, showNav, setShowNav }) => {
  const [showBtn, setShowBtn] = useState(true);
  const [supportPage, setSupportPage] = useState("mgt");
  useEffect(() => {
    document.title = "Support Management";
    setPage("support");
  });
  useEffect(() => {
    setSupportPage("mgt");
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
      <SupportMainContainer
        page={page}
        setPage={setPage}
        showNav={showNav}
        setShowNav={setShowNav}
        showBtn={showBtn}
        setShowBtn={setShowBtn}
        supportPage={supportPage}
        setSupportPage={setSupportPage}
      />
    </>
  );
};

export default Support;
