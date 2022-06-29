import React, { useState } from 'react'
import Hamburger from './Hamburger'
import HeaderDropDowns from './headerdropdowns/HeaderDropDowns'
import HeaderSearch from './HeaderSearch'

const Header = ({showNav, setShowNav,page,setPage }) => {
	const [searchInput, setSearchInput] = useState('');
  return (
    <header className="top-nav">
		<div className="top-nav-inner">
			<Hamburger showNav={showNav} setShowNav={setShowNav} />
			<HeaderSearch searchInput={searchInput} setSearchInput={ setSearchInput }/>
			<HeaderDropDowns page={page} setPage={ setPage }/>
		</div>
	</header>
  )
}

export default Header