import React from "react";
import RoomsBreadCrumb from "./RoomsBreadCrumb";
import RoomsListContainer from "./RoomsListContainer";
import RoomsStatArea from "./RoomsStatArea";
import RoomsSubNav from "./RoomsSubNav";

const RoomsMain = ({
  page,
  setPage,
  showBtn,
  setShowBtn,
  roomsPage,
  setRoomsPage,
}) => {
  return (
    <div className='main-content'>
      <div className='container-fluid'>
        <RoomsBreadCrumb
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          roomsPage={roomsPage}
          setRoomsPage={setRoomsPage}
        />
        <RoomsSubNav showBtn={showBtn} setShowBtn={setShowBtn} />
        <RoomsStatArea />
        <RoomsListContainer
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          roomsPage={roomsPage}
          setRoomsPage={setRoomsPage}
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

export default RoomsMain;
