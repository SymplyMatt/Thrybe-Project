import React, {useEffect, useState } from 'react'
import SideNav from '../dashboard/sidenav/SideNav'
import SeeksMainContainer from './SeeksMainContainer';

const Seeks = ({ page, setPage, showNav, setShowNav }) => {
  const [showBtn, setShowBtn] = useState(true);
  const [seeksPage,setSeeksPage]=useState('seeks')
  useEffect(() => {
    document.title = 'Seeks';
    setPage('seeks');
  })
  useEffect(() => {
    setShowNav(false)
  },[page])
  return (
    <>
        <SideNav page={page} setPage={setPage} showNav={showNav} setShowNav={ setShowNav}/>
        <SeeksMainContainer page={page} setPage={setPage} showNav={showNav} setShowNav={setShowNav} showBtn={showBtn} setShowBtn={setShowBtn} seeksPage={seeksPage} setSeeksPage={ setSeeksPage }/>    
    </>
  )
}

export default Seeks