import React, { useEffect, useState } from "react";
import SideNav from "../dashboard/sidenav/SideNav";
import WalletMainContainer from "./WalletMainContainer";

const Wallet = ({ page, setPage, showNav, setShowNav }) => {
  const [showBtn, setShowBtn] = useState(true);
  const [walletPage, setWalletPage] = useState("mgt");
  useEffect(() => {
    document.title = "Wallet Management";
    setPage("wallet");
  });
  useEffect(() => {
    setWalletPage("mgt");
  }, [page]);
  useEffect(() => {
    setShowNav(false);
  }, [page]);
  return (
    <>
      <SideNav
        page={page}
        setPage={setPage}
        showNav={showNav}
        setShowNav={setShowNav}
      />
      <WalletMainContainer
        page={page}
        setPage={setPage}
        showNav={showNav}
        setShowNav={setShowNav}
        showBtn={showBtn}
        setShowBtn={setShowBtn}
        walletPage={walletPage}
        setWalletPage={setWalletPage}
      />
    </>
  );
};

export default Wallet;
