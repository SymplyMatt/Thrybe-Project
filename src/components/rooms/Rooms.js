import React, { useEffect, useState } from "react";
import SideNav from "../dashboard/sidenav/SideNav";
import RoomsMainContainer from "./RoomsMainContainer";

const Rooms = ({ page, setPage, showNav, setShowNav }) => {
  const [showBtn, setShowBtn] = useState(true);
  const [roomsPage, setRoomsPage] = useState("mgt");
  useEffect(() => {
    document.title = "Rooms Management";
    setPage("rooms");
  });
  useEffect(() => {
    setRoomsPage("mgt");
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
      <RoomsMainContainer
        page={page}
        setPage={setPage}
        showNav={showNav}
        setShowNav={setShowNav}
        showBtn={showBtn}
        setShowBtn={setShowBtn}
        roomsPage={roomsPage}
        setRoomsPage={setRoomsPage}
      />
    </>
  );
};

export default Rooms;
