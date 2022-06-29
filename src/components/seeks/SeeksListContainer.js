import React from "react";
import SeeksList from "./SeeksList";

const SeeksListContainer = ({
  showBtn,
  setShowBtn,
  seeksPage,
  setSeeksPage,
}) => {
  return (
    <div className='row'>
      <div className='col-12 mb-3'>
        <div className='custom-card'>
          <div className='users-table-div table-responsive'>
            <table className='table table-borderless users-table'>
              <thead>
                <tr>
                  <th></th>
                  <th colSpan='2'>Seek Title</th>
                  <th>Date Created</th>
                  <th>Cost</th>
                  <th>Duration</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <SeeksList
                  showBtn={showBtn}
                  setShowBtn={setShowBtn}
                  seeksPage={seeksPage}
                  setSeeksPage={setSeeksPage}
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeksListContainer;
