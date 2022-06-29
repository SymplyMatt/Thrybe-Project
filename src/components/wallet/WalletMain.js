import React from "react";
import WalletBreadCrumb from "./WalletBreadCrumb";
import WalletListContainer from "./WalletListContainer";
import WalletStatArea from "./WalletStatArea";
import WalletSubNav from "./WalletSubNav";
import WalletCharts from "./charts/WalletCharts";

const WalletMain = ({
  page,
  setPage,
  showBtn,
  setShowBtn,
  walletPage,
  setWalletPage,
}) => {
  return (
    <div className='main-content'>
      <div className='container-fluid'>
        <WalletBreadCrumb
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          walletPage={walletPage}
          setWalletPage={setWalletPage}
        />
        <WalletStatArea />
        <WalletCharts
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          walletPage={walletPage}
          setWalletPage={setWalletPage}
        />
        <WalletSubNav showBtn={showBtn} setShowBtn={setShowBtn} />
        <WalletListContainer
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          walletPage={walletPage}
          setWalletPage={setWalletPage}
        />
      </div>
    </div>
  );
};

export default WalletMain;
