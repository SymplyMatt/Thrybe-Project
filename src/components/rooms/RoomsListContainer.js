import React, { useState } from "react";
import RoomsList from "./RoomsList";
import { useNavigate } from "react-router-dom";

const RoomsListContainer = ({
  page,
  setPage,
  showBtn,
  setShowBtn,
  roomsPage,
  setRoomsPage,
}) => {
  const navigate = useNavigate();
  let [token, setToken] = useState(" ");
  let [result, setResult] = useState([]);
  let [showResult, setShowResult] = useState(false);

  return (
    <div className='row'>
      <div className='col-12 mb-3'>
        <div className='custom-card'>
          <div className='users-table-div table-responsive'>
            <table className='table table-borderless users-table'>
              <thead>
                <tr>
                  <th></th>
                  <th colSpan='2'>Banner</th>
                  <th>Room Title</th>
                  <th>Date Created</th>
                  <th>Members</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <RoomsList
                  showBtn={showBtn}
                  setShowBtn={setShowBtn}
                  roomsPage={roomsPage}
                  setRoomsPage={setRoomsPage}
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsListContainer;
