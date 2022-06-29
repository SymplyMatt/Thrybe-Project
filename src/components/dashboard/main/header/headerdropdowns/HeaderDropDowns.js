import React, { useState } from 'react'
import MessagesDropDown from './messagesdropdown/MessagesDropDown'
import NotificationDropdown from './notificationsdropdown/NotificationsDropdown'
import Settings from './settings/Settings'
import Profile from './profile/Profile'

const HeaderDropDowns = ({page,setPage}) => {
  return (
            <div className="top-nav-dropdowns">
		  		<NotificationDropdown />
				<MessagesDropDown />
				<Settings />
				<Profile page={page} setPage={ setPage }/>
	        </div>
  )
}

export default HeaderDropDowns