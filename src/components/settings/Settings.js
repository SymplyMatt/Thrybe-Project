import React, { useEffect } from "react";
import SideNav from "../dashboard/sidenav/SideNav";
import { useNavigate } from "react-router-dom";
import SettingsMainContainer from "./SettingsMainContainer";

const Settings = ({ page, setPage, showNav, setShowNav }) => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Settings";
    setPage("settings");
  });
  return (
    <>
      <SideNav
        page={page}
        setPage={setPage}
        showNav={showNav}
        setShowNav={setShowNav}
      />
      <SettingsMainContainer
        page={page}
        setPage={setPage}
        showNav={showNav}
        setShowNav={setShowNav}
      />
    </>
  );
};

export default Settings;
