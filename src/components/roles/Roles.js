import React, { useEffect, useState } from "react";
import SideNav from "../dashboard/sidenav/SideNav";
import RolesMainContainer from "./RolesMainContainer";

const Roles = ({ page, setPage, showNav, setShowNav }) => {
  const [rolesPage, setRolesPage] = useState("mgt");
  const [showBtn, setShowBtn] = useState(true);

  useEffect(() => {
    document.title = "Role Management";
    setPage("roles");
  });
  useEffect(() => {
    setRolesPage("mgt");
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
      <RolesMainContainer
        page={page}
        setPage={setPage}
        showNav={showNav}
        setShowNav={setShowNav}
        showBtn={showBtn}
        setShowBtn={setShowBtn}
        rolesPage={rolesPage}
        setRolesPage={setRolesPage}
      />
    </>
  );
};

export default Roles;
