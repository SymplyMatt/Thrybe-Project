import React from "react";
import Header from "../dashboard/main/header/Header";
import AddNewGame from "./sub/AddNewGame";
import GamesMain from "./GamesMain";
import SingleGame from "./sub/singlegame/SingleGame";

const GamesMainContainer = ({
  page,
  setPage,
  showNav,
  setShowNav,
  showBtn,
  setShowBtn,
  gamesPage,
  setGamesPage,
}) => {
  return (
    <main className='main-section'>
      <Header
        page={page}
        setPage={setPage}
        showNav={showNav}
        setShowNav={setShowNav}
      />
      {gamesPage == "mgt" && (
        <GamesMain
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          gamesPage={gamesPage}
          setGamesPage={setGamesPage}
        />
      )}
      {(gamesPage == "single" || gamesPage == "single-2") && (
        <SingleGame
          page={page}
          setPage={setPage}
          gamesPage={gamesPage}
          setGamesPage={setGamesPage}
        />
      )}
      {(gamesPage == "addnew-1" ||
        gamesPage == "addnew-2" ||
        gamesPage == "addnew-3") && (
        <AddNewGame
          page={page}
          setPage={setPage}
          gamesPage={gamesPage}
          setGamesPage={setGamesPage}
        />
      )}
    </main>
  );
};

export default GamesMainContainer;
