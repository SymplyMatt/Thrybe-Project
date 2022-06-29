import React from "react";
import Header from "./header/Header";
import MainSection from "./mainsection/MainSection";

const Main = ({
  showNav,
  setShowNav,
  page,
  setPage,
  setTrendingTalksSection,
  setNewestUsersSection,
  setBarChartSection,
  setUsersSection,
  setGiftsSection,
  setTalksSection,
  setRoomsSection,
}) => {
  return (
    <main className='main-section' style={{ padding: 0 }}>
      <Header
        showNav={showNav}
        setShowNav={setShowNav}
        page={page}
        setPage={setPage}
      />
      <MainSection
        page={page}
        setPage={setPage}
        setTrendingTalksSection={setTrendingTalksSection}
        setNewestUsersSection={setNewestUsersSection}
        setBarChartSection={setBarChartSection}
        setUsersSection={setUsersSection}
        setGiftsSection={setGiftsSection}
        setTalksSection={setTalksSection}
        setRoomsSection={setRoomsSection}
      />
    </main>
  );
};

export default Main;
