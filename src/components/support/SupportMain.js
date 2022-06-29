import React from "react";
import SupportBreadCrumb from "./SupportBreadCrumb";
import SupportListContainer from "./SupportListContainer";
import SupportSubNav from "./SupportSubNav";

const SupportMain = ({
  page,
  setPage,
  showBtn,
  setShowBtn,
  supportPage,
  setSupportPage,
  setModal,
}) => {
  return (
    <div className='main-content'>
      <div className='container-fluid'>
        <SupportBreadCrumb
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          supportPage={supportPage}
          setSupportPage={setSupportPage}
          setModal={setModal}
        />
        <SupportSubNav showBtn={showBtn} setShowBtn={setShowBtn} />
        <SupportListContainer
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          supportPage={supportPage}
          setSupportPage={setSupportPage}
        />
      </div>
    </div>
  );
};

export default SupportMain;
