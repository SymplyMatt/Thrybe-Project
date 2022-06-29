import React,{useState} from 'react'
import ProfileActions from './ProfileActions'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = ({page}) => {
    const navigate = useNavigate();
    const [showDropDowns, setShowDrops] = useState(false);
    const [userImg, setUserImg] = useState(' ');
    
        useEffect(() => {
		setUserImg(localStorage.getItem('img') || sessionStorage.getItem('img'))
		if (!userImg) {
			navigate('/login')
		}
	}, [page])


   
  return (
        <div className="dropdown messages-dropdown position-relative d-flex align-items-center ml-4" onClick={()=>setShowDrops(!showDropDowns)}>
            <button className="btn position-relative" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src={`data:image/png;base64,${userImg}`} className="img-rounded" alt="notification" style={{borderRadius: '50%'}}/>
            </button>
            <span className="pl-1"><i className="fa fa-angle-down"></i></span>
            <div className={`dropdown-menu mt-3 my---dropdown ${showDropDowns && 'show'}`} aria-labelledby="dropdownMenuButton">
                <div className="position-relative drop-down-menu-inner">
                    <div className="position-absolute dropdown-pointer">
                        <i className="fa fa-caret-up"></i>
                    </div>
                    <ProfileActions />
                </div>
            </div>
        </div>
    )
}

export default Profile