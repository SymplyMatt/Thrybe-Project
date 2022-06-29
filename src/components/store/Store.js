import React, { useEffect, useState } from "react";
import SideNav from "../dashboard/sidenav/SideNav";
import StoreMainContainer from "./StoreMainContainer";

const Store = ({ page, setPage, showNav, setShowNav }) => {
  const [showBtn, setShowBtn] = useState(true);
  const [storePage, setStorePage] = useState("mgt");
  useEffect(() => {
    document.title = "Store Management";
    setPage("store");
  });
  useEffect(() => {
    setStorePage("mgt");
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
      <StoreMainContainer
        page={page}
        setPage={setPage}
        showNav={showNav}
        setShowNav={setShowNav}
        showBtn={showBtn}
        setShowBtn={setShowBtn}
        storePage={storePage}
        setStorePage={setStorePage}
      />
    </>
  );
};

export default Store;
