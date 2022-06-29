import React from "react";
import WalletList from "./WalletList";

const WalletListContainer = () => {
  return (
    <div className='row mt-4'>
      <div className='col-lg-11'>
        <div className='custom-card'>
          <div className='users-table-div table-responsive mt-4 mb-3'>
            <table className='table table-borderless users-table'>
              <thead>
                <tr>
                  <th>Transaction Type</th>
                  <th>Transaction Medium</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <WalletList />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletListContainer;
