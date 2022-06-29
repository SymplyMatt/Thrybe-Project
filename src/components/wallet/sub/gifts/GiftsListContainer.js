import React from "react";
import GiftsList from "./GiftsList";

const GiftsListContainer = ({
  page,
  setPage,
  showNav,
  setShowNav,
  showBtn,
  setShowBtn,
  walletPage,
  setWalletPage,
}) => {
  return (
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
          <GiftsList
            page={page}
            setPage={setPage}
            showBtn={showBtn}
            setShowBtn={setShowBtn}
            walletPage={walletPage}
            setWalletPage={setWalletPage}
          />
        </tbody>
      </table>
    </div>
  );
};

export default GiftsListContainer;
