import React from "react";
import Header from "../dashboard/main/header/Header";
import AddNewTalkOne from "./sub/AddNewTalkOne";
import AddNewTalkTwo from "./sub/AddNewTalkTwo";
import AddNewTalkThree from "./sub/AddNewTalkThree";
import TalksMain from "./TalksMain";
import SingleTalk from "./sub/singletalk/SingleTalk";

const TalksMainContainer = ({
  page,
  setPage,
  showNav,
  setShowNav,
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
    <main className='main-section'>
      <Header
        page={page}
        setPage={setPage}
        showNav={showNav}
        setShowNav={setShowNav}
      />
      {talksPage == "talks" && (
        <TalksMain
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          talksPage={talksPage}
          setTalksPage={setTalksPage}
          allTalks={allTalks}
          activeTalks={activeTalks}
          pendingTalks={pendingTalks}
          inActiveTalks={inActiveTalks}
          thrybeTalks={thrybeTalks}
        />
      )}
      {talksPage == "addnew-1" && (
        <AddNewTalkOne
          page={page}
          setPage={setPage}
          talksPage={talksPage}
          setTalksPage={setTalksPage}
        />
      )}
      {talksPage == "addnew-2" && (
        <AddNewTalkTwo
          page={page}
          setPage={setPage}
          talksPage={talksPage}
          setTalksPage={setTalksPage}
        />
      )}
      {talksPage == "addnew-3" && (
        <AddNewTalkThree
          page={page}
          setPage={setPage}
          talksPage={talksPage}
          setTalksPage={setTalksPage}
        />
      )}
      {talksPage == "addnew-3" && (
        <AddNewTalkThree
          page={page}
          setPage={setPage}
          talksPage={talksPage}
          setTalksPage={setTalksPage}
        />
      )}
      {talksPage == "single" && (
        <SingleTalk
          page={page}
          setPage={setPage}
          talksPage={talksPage}
          setTalksPage={setTalksPage}
        />
      )}
    </main>
  );
};

export default TalksMainContainer;
