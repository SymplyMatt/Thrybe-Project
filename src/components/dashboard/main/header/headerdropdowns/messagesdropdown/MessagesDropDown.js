import React,{useState} from 'react'
import MessageItem from './MessageItem'

const MessagesDropDown = () => {
    	const [showDropDowns, setShowDrops] = useState(false)
  return (
        <div className="dropdown messages-dropdown position-relative ml-4" onClick={()=>setShowDrops(!showDropDowns)}>
            <button
                className="btn dropdown-button position-relative"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                <img
                    src="./assets/images/Mail-black-icon.svg"
                    alt="notification"
                />
                <div className="position-absolute nots-number">1</div>
            </button>
            <div className={`dropdown-menu mt-3 my---dropdown ${showDropDowns && 'show'}`} aria-labelledby="dropdownMenuButton">
                <div className="position-relative drop-down-menu-inner">
                    <div className="position-absolute dropdown-pointer">
                        <i className="fa fa-caret-up"></i>
                    </div>
                    <MessageItem />
                </div>
            </div>
        </div>
  )
}

export default MessagesDropDown