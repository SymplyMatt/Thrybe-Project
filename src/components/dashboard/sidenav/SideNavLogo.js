import React from 'react'
import { useNavigate } from 'react-router-dom';


const SideNavLogo = ({page,setPage}) => {
  let navigate = useNavigate();

  return (
    <div className="navbrand d-flex justify-content-center" onClick={() => {
      setPage('login')
      navigate('/')
    }}>
        <img src="./assets/images/logo-colored.svg" className="img=fluid" alt="Logo" />
    </div>
  )
}

export default SideNavLogo