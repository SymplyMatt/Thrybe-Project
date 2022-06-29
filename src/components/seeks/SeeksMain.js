import React from 'react'
import SeeksBreadCrumb from './SeeksBreadCrumb'
import SeeksListContainer from './SeeksListContainer'
import SeeksStatArea from './SeeksStatArea'
import SeeksSubNav from './SeeksSubNav'

const SeeksMain = ({page,setPage,showBtn,setShowBtn, seeksPage, setSeeksPage}) => {
  return (
    <div className="main-content">
        <div className="container-fluid">
            <SeeksBreadCrumb  showBtn={showBtn} page={page} setPage={setPage} setShowBtn={setShowBtn} seeksPage={seeksPage} setSeeksPage={ setSeeksPage }/>
            <SeeksSubNav showBtn={showBtn} setShowBtn={setShowBtn}/>
            <SeeksStatArea />
            <SeeksListContainer showBtn={showBtn} setShowBtn={setShowBtn} seeksPage={seeksPage} setSeeksPage={ setSeeksPage }/>
        </div>
    </div>
  )
}

export default SeeksMain