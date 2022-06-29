import React, { useState } from "react";
import Header from "../dashboard/main/header/Header";
import RolesMain from "./RolesMain";
import AddNewRole from "./sub/AddNewRole";
import RoleMembers from "./sub/singlerole/RoleMembers";
const RolesMainContainer = ({
  page,
  setPage,
  showNav,
  setShowNav,
  showBtn,
  setShowBtn,
  rolesPage,
  setRolesPage,
}) => {
  return (
    <main className='main-section'>
      <Header
        page={page}
        setPage={setPage}
        showNav={showNav}
        setShowNav={setShowNav}
      />
      {rolesPage == "mgt" && (
        <RolesMain
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          rolesPage={rolesPage}
          setRolesPage={setRolesPage}
        />
      )}

      {rolesPage == "single" && (
        <RoleMembers
          page={page}
          setPage={setPage}
          rolesPage={rolesPage}
          setRolesPage={setRolesPage}
        />
      )}
      {(rolesPage == "addnew-1" ||
        rolesPage == "addnew-2" ||
        rolesPage == "addnew-3") && (
        <AddNewRole
          page={page}
          setPage={setPage}
          rolesPage={rolesPage}
          setRolesPage={setRolesPage}
        />
      )}
    </main>
  );
};

export default RolesMainContainer;
