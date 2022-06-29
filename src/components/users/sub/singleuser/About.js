import React, { useState } from 'react'
import BasicInfo from './BasicInfo'
import Gallery from './Gallery'
import Hobbies from './Hobbies'
import UserBio from './UserBio'

const About = () => {
    const [activeAboutNav, setActiveAboutNav]= useState('bio')
  return (
      
        <div className="tab-pane fade" id="about" role="tabpanel" aria-labelledby="about-tab" style={{display : 'block', opacity: '1'}}>
            <div className="row">
                <div className="col-lg-4" style={{ borderRight: '1px solid #ccc' }}>
                    <div className="p-4">
                        <div className="about-tab nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a className={`nav-link ${activeAboutNav=='bio' && 'active'}`} id="v-pills-bio-tab" data-toggle="pill" href="#v-pills-bio" role="tab" aria-controls="v-pills-bio" aria-selected="true" onClick={()=>setActiveAboutNav('bio')}>User Bio</a>
                            <a className={`nav-link ${activeAboutNav=='info' && 'active'}`} id="v-pills-bInfo-tab" data-toggle="pill" href="#v-pills-bInfo" role="tab" aria-controls="v-pills-bInfo" aria-selected="false" onClick={()=>setActiveAboutNav('info')}>Basic Information</a>
                            <a className={`nav-link ${activeAboutNav=='hobbies' && 'active'}`} id="v-pills-hobbies-tab" data-toggle="pill" href="#v-pills-hobbies" role="tab" aria-controls="v-pills-hobbies" aria-selected="false" onClick={()=>setActiveAboutNav('hobbies')}>Hobbies</a>
                            <a className={`nav-link ${activeAboutNav=='gallery' && 'active'}`} id="v-pills-gallery-tab" data-toggle="pill" href="#v-pills-gallery" role="tab" aria-controls="v-pills-gallery" aria-selected="false" onClick={()=>setActiveAboutNav('gallery')}>Photo Gallery</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="p-4">
                        <div className="tab-content" id="v-pills-tabContent">
                            {activeAboutNav == 'bio' && <UserBio />}        
                            {activeAboutNav == 'info' && <BasicInfo />}        
                            {activeAboutNav == 'hobbies' && <Hobbies />}        
                            {activeAboutNav == 'gallery' && <Gallery />}        
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About