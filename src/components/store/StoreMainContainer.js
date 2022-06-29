import React, { useState } from "react";
import Header from "../dashboard/main/header/Header";
import SingleGift from "./sub/singlegift/SingleGift";
import StoreMain from "./StoreMain";
import AddNewGift from "./sub/AddNewGift";
const StoreMainContainer = ({
  page,
  setPage,
  showNav,
  setShowNav,
  showBtn,
  setShowBtn,
  storePage,
  setStorePage,
}) => {
  return (
    <main className='main-section'>
      <Header
        page={page}
        setPage={setPage}
        showNav={showNav}
        setShowNav={setShowNav}
      />
      {storePage == "mgt" && (
        <StoreMain
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          storePage={storePage}
          setStorePage={setStorePage}
        />
      )}
      {(storePage == "single" || storePage == "single-2") && (
        <SingleGift
          page={page}
          setPage={setPage}
          storePage={storePage}
          setStorePage={setStorePage}
        />
      )}
      {(storePage == "addnew-1" ||
        storePage == "addnew-2" ||
        storePage == "addnew-3") && (
        <AddNewGift
          page={page}
          setPage={setPage}
          storePage={storePage}
          setStorePage={setStorePage}
        />
      )}
    </main>
  );
};

export default StoreMainContainer;
