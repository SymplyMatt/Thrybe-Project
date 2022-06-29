import React, { useState } from "react";
import Header from "../dashboard/main/header/Header";
import SingleSupport from "./sub/SingleSupport";
import SupportMain from "./SupportMain";
import SupportModal from "./SupportModal";

const SupportMainContainer = ({
  page,
  setPage,
  showNav,
  setShowNav,
  showBtn,
  setShowBtn,
  supportPage,
  setSupportPage,
}) => {
  const [modal, setModal] = useState("none");
  return (
    <main className='main-section'>
      <Header
        page={page}
        setPage={setPage}
        showNav={showNav}
        setShowNav={setShowNav}
      />
      {supportPage == "mgt" && (
        <SupportMain
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          supportPage={supportPage}
          setSupportPage={setSupportPage}
          setModal={setModal}
        />
      )}
      {supportPage == "single" && (
        <SingleSupport
          page={page}
          setPage={setPage}
          supportPage={supportPage}
          setSupportPage={setSupportPage}
        />
      )}
      {(modal == "one" || modal == "two") && (
        <SupportModal modal={modal} setModal={setModal} />
      )}
    </main>
  );
};

export default SupportMainContainer;
