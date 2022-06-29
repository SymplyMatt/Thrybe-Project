import React, { useEffect, useState } from "react";
import SideNav from "../dashboard/sidenav/SideNav";
import GamesMainContainer from "./GamesMainContainer";

const Games = ({ page, setPage, showNav, setShowNav }) => {
  const [showBtn, setShowBtn] = useState(true);
  const [gamesPage, setGamesPage] = useState("mgt");
  useEffect(() => {
    document.title = "Thrybe Games - Game List";
    setPage("games");
  });
  useEffect(() => {
    setGamesPage("mgt");
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
      <GamesMainContainer
        page={page}
        setPage={setPage}
        showNav={showNav}
        setShowNav={setShowNav}
        showBtn={showBtn}
        setShowBtn={setShowBtn}
        gamesPage={gamesPage}
        setGamesPage={setGamesPage}
      />
    </>
  );
};

export default Games;
