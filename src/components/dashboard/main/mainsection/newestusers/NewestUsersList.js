import React from "react";

const NewestUsersList = ({ name, email, src, index }) => {
  return (
    <>
      <li className='d-flex align-items-center justify-content-between mb-3'>
        <div className='d-flex align-items-center'>
          <span className='font-sm'>{index + 1}</span>&nbsp;
          <div>
            <img
              src={src || "./assets/images/user-avatar.svg"}
              style={{ height: "40px", width: "40px", borderRadius: "50%" }}
              alt=''
            />
          </div>
          &nbsp;
          <div>
            <h5 className='font-sm2 f-weight-600'>{name || "Unknown"}</h5>
            <p className='font-sm mb-0'>{email || "Unknown"}</p>
          </div>
        </div>
        <a href=''>
          <i className='fa fa-angle-right text-dark'></i>
        </a>
      </li>
    </>
  );
};

export default NewestUsersList;
