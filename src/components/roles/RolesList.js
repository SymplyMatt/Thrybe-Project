import React from "react";

const RolesList = ({ showBtn, setShowBtn, rolesPage, setRolesPage }) => {
  return (
    <>
      <tr style={{ backgroundColor: "white" }}>
        <td>
          <input type='checkbox' id='check' disabled />
        </td>
        <td className='f-weight-600'>Super Admin</td>
        <td onClick={() => setRolesPage("single")}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          sagittis massa diam, ultricies aliquam se...
        </td>
        <td className='f-weight-600'>Default</td>
        <td>
          <div className='successful-status'>Active</div>
        </td>
        <td>
          <div className='d-flex opacity-half'>
            <a href='#'>
              <img
                src='./assets/images/Edit.svg'
                className='img-fluid'
                alt=''
              />
            </a>
            <a href='#' className='ml-4'>
              <img
                src='./assets/images/delete-icon-black.svg'
                className='img-fluid'
                alt=''
              />
            </a>
          </div>
        </td>
      </tr>
      <tr style={{ backgroundColor: "white" }}>
        <td>
          <input type='checkbox' id='check' />
        </td>
        <td className='f-weight-600'>Role Manager 1</td>
        <td>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          sagittis massa diam, ultricies aliquam se...
        </td>
        <td className='f-weight-600'>Default</td>
        <td>
          <div className='successful-status'>Active</div>
        </td>
        <td>
          <div className='d-flex'>
            <a href='#'>
              <img
                src='./assets/images/Edit.svg'
                className='img-fluid'
                alt=''
              />
            </a>
            <a href='#' className='ml-4'>
              <img
                src='./assets/images/delete-icon-black.svg'
                className='img-fluid'
                alt=''
              />
            </a>
          </div>
        </td>
      </tr>
      <tr style={{ backgroundColor: "white" }}>
        <td>
          <input type='checkbox' id='check' />
        </td>
        <td className='f-weight-600'>Role Manager 2</td>
        <td>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          sagittis massa diam, ultricies aliquam se...
        </td>
        <td className='f-weight-600'>Default</td>
        <td>
          <div className='failed-status'>Inactive</div>
        </td>
        <td>
          <div className='d-flex'>
            <a href='#'>
              <img
                src='./assets/images/Edit.svg'
                className='img-fluid'
                alt=''
              />
            </a>
            <a href='#' className='ml-4'>
              <img
                src='./assets/images/delete-icon-black.svg'
                className='img-fluid'
                alt=''
              />
            </a>
          </div>
        </td>
      </tr>
    </>
  );
};

export default RolesList;
