import React from "react";
import TalksList from "./TalksList";

const TalksListContainer = ({
  showBtn,
  setShowBtn,
  talksPage,
  setTalksPage,
  thrybeTalks,
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
                  <th colSpan='2'>Talk name</th>
                  <th>Speakers</th>
                  <th>Members</th>
                  <th>Date Created</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {thrybeTalks.length >= 1 &&
                  thrybeTalks.map((item, index) => (
                    <TalksList
                      key={index}
                      showBtn={showBtn}
                      setShowBtn={setShowBtn}
                      talksPage={talksPage}
                      setTalksPage={setTalksPage}
                      item={item}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalksListContainer;
