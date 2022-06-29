import React from "react";
import RolesBreadCrumb from "./RolesBreadCrumb";
import RolesListContainer from "./RolesListContainer";
import RolesSubNav from "./RolesSubNav";

const RolesMain = ({
  page,
  setPage,
  showBtn,
  setShowBtn,
  rolesPage,
  setRolesPage,
}) => {
  return (
    <div className='main-content'>
      <div className='container-fluid'>
        <RolesBreadCrumb
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          rolesPage={rolesPage}
          setRolesPage={setRolesPage}
        />
        <RolesSubNav showBtn={showBtn} setShowBtn={setShowBtn} />
        <RolesListContainer
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          rolesPage={rolesPage}
          setRolesPage={setRolesPage}
        />
      </div>
    </div>
  );
};

export default RolesMain;
