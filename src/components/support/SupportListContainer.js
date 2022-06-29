import React from "react";
import SupportList from "./SupportList";

const SupportListContainer = ({
  page,
  setPage,
  showBtn,
  setShowBtn,
  supportPage,
  setSupportPage,
}) => {
  return (
    <div className='row mt-4'>
      <div className='col-12 mb-3'>
        <div className='custom-card'>
          <div className='p-1 table-responsive'>
            <table className='table support-table'>
              <thead>
                <tr>
                  <th></th>
                  <th colSpan='2'>Message type</th>
                  <th>Subject</th>
                  <th>Message Body</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                <SupportList
                  showBtn={showBtn}
                  setShowBtn={setShowBtn}
                  supportPage={supportPage}
                  setSupportPage={setSupportPage}
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportListContainer;
