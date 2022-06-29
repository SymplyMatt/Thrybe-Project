import React from "react";
import TalksBreadCrumb from "./TalksBreadCrumb";
import TalksListContainer from "./TalksListContainer";
import TalksStatArea from "./TalksStatArea";
import TalksSubNav from "./TalksSubNav";

const TalksMain = ({
  page,
  setPage,
  showBtn,
  setShowBtn,
  talksPage,
  setTalksPage,
  allTalks,
  activeTalks,
  pendingTalks,
  inActiveTalks,
  thrybeTalks,
}) => {
  return (
    <div className='main-content'>
      <div className='container-fluid'>
        <TalksBreadCrumb
          showBtn={showBtn}
          page={page}
          setPage={setPage}
          setShowBtn={setShowBtn}
          talksPage={talksPage}
          setTalksPage={setTalksPage}
        />
        <TalksSubNav showBtn={showBtn} setShowBtn={setShowBtn} />
        <TalksStatArea
          allTalks={allTalks}
          activeTalks={activeTalks}
          pendingTalks={pendingTalks}
          inActiveTalks={inActiveTalks}
        />

        <TalksListContainer
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          talksPage={talksPage}
          setTalksPage={setTalksPage}
          thrybeTalks={thrybeTalks}
        />
        <div className='row mb-4'>
          <div className='col-12 d-flex justify-content-between'>
            <div>Showing 10 of 100 records</div>
            <div>
              <img
                src='./assets/images/arrowleft-icon.svg'
                alt='arrowleft-icon'
                className='p-1'
              />
              <img
                src='./assets/images/numoneframe-icon.svg'
                alt='numoneframe-icon'
                className='p-1'
              />
              <img
                src='./assets/images/arrowright-icon.svg'
                alt='arrowright-icon'
                className='p-1'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalksMain;
