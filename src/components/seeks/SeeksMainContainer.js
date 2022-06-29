import React from 'react'
import Header from '../dashboard/main/header/Header'
import AddNewSeekOne from './sub/AddNewSeekOne'
import AddNewSeekTwo from './sub/AddNewSeekTwo'
import AddNewSeekThree from './sub/AddNewSeekThree'
import SeeksMain from './SeeksMain'
import SingleSeek from './sub/singleseek/SingleSeek'

const SeeksMainContainer = ({ page, setPage, showNav, setShowNav,showBtn,setShowBtn, seeksPage, setSeeksPage  }) => {
  return (
    <main className="main-section">
        <Header page={page} setPage={setPage} showNav={showNav} setShowNav={setShowNav} />
        {seeksPage == 'seeks' && <SeeksMain page={page} setPage={setPage} showBtn={showBtn} setShowBtn={setShowBtn} seeksPage={seeksPage} setSeeksPage={ setSeeksPage }/>}
        {seeksPage == 'addnew-1' && <AddNewSeekOne page={page} setPage={setPage} seeksPage={seeksPage} setSeeksPage={ setSeeksPage }/>}
        {seeksPage == 'addnew-2' && <AddNewSeekTwo page={page} setPage={setPage} seeksPage={seeksPage} setSeeksPage={ setSeeksPage }/>}
        {seeksPage == 'addnew-3' && <AddNewSeekThree page={page} setPage={setPage} seeksPage={seeksPage} setSeeksPage={ setSeeksPage }/>}
        {seeksPage == 'addnew-3' && <AddNewSeekThree page={page} setPage={setPage} seeksPage={seeksPage} setSeeksPage={ setSeeksPage }/>}
        {seeksPage == 'single' && <SingleSeek page={page} setPage={setPage} seeksPage={seeksPage} setSeeksPage={ setSeeksPage }/>}
    </main>    
  )
}

export default SeeksMainContainer