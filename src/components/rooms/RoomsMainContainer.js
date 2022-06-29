import React, { useState } from "react";
import Header from "../dashboard/main/header/Header";
import AddNewRoomOne from "./sub/AddNewRoomOne";
import AddNewRoomThree from "./sub/AddNewRoomThree";
import AddNewRoomTwo from "./sub/AddNewRoomTwo";
import SingleRoom from "./sub/singleroom/SingleRoom";
import RoomsMain from "./RoomsMain";

const RoomsMainContainer = ({
  page,
  setPage,
  showNav,
  setShowNav,
  showBtn,
  setShowBtn,
  roomsPage,
  setRoomsPage,
}) => {
  return (
    <main className='main-section'>
      <Header
        page={page}
        setPage={setPage}
        showNav={showNav}
        setShowNav={setShowNav}
      />
      {roomsPage == "mgt" && (
        <RoomsMain
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          roomsPage={roomsPage}
          setRoomsPage={setRoomsPage}
        />
      )}
      {roomsPage == "addnew-1" && (
        <AddNewRoomOne
          page={page}
          setPage={setPage}
          roomsPage={roomsPage}
          setRoomsPage={setRoomsPage}
        />
      )}
      {roomsPage == "addnew-2" && (
        <AddNewRoomTwo
          page={page}
          setPage={setPage}
          roomsPage={roomsPage}
          setRoomsPage={setRoomsPage}
        />
      )}
      {roomsPage == "addnew-3" && (
        <AddNewRoomThree
          page={page}
          setPage={setPage}
          roomsPage={roomsPage}
          setRoomsPage={setRoomsPage}
        />
      )}
      {roomsPage == "single" && (
        <SingleRoom
          page={page}
          setPage={setPage}
          roomsPage={roomsPage}
          setRoomsPage={setRoomsPage}
        />
      )}
    </main>
  );
};

export default RoomsMainContainer;
