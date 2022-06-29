import React from "react";
import StoreBreadCrumb from "./StoreBreadCrumb";
import StoreListContainer from "./StoreListContainer";
import StoreStatArea from "./StoreStatArea";
import StoreSubNav from "./StoreSubNav";

const StoreMain = ({
  page,
  setPage,
  showBtn,
  setShowBtn,
  storePage,
  setStorePage,
}) => {
  return (
    <div className='main-content'>
      <div className='container-fluid'>
        <StoreBreadCrumb
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          storePage={storePage}
          setStorePage={setStorePage}
        />
        <StoreSubNav showBtn={showBtn} setShowBtn={setShowBtn} />
        <StoreStatArea />
        <StoreListContainer
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          storePage={storePage}
          setStorePage={setStorePage}
        />
      </div>
    </div>
  );
};

export default StoreMain;
