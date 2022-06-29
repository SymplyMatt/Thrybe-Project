import React from "react";
import GamesList from "./GamesList";

const GamesListContainer = ({
  showBtn,
  setShowBtn,
  gamesPage,
  setGamesPage,
}) => {
  return (
    <div className='row mt-4'>
      <div className='col-12 mb-3'>
        <div className='custom-card'>
          <div className='users-table-div table-responsive'>
            <table className='table table-borderless users-table'>
              <thead>
                <tr>
                  <th></th>
                  <th>Banner</th>
                  <th>Title</th>
                  <th>Type</th>
                  <th>Participants</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <GamesList
                  showBtn={showBtn}
                  setShowBtn={setShowBtn}
                  gamesPage={gamesPage}
                  setGamesPage={setGamesPage}
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesListContainer;
