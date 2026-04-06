import React from 'react'
import "./content.css";
import image from "../assets/cropped-logo.png"

const Content = () => {
  return (
    <>
    <div className='content1'>
        <h1 className="Tag1">Feel Pleasant with sweet Fragrance</h1>
       
      <div>    <p className="home-intro">
 Content
  </p></div>
  <div className='side-text'>
    <p className='perf'>Change your entire area with Perfume</p>
    <img src={image} alt="image" className='logo2'/>
  </div>
   
    </div>
    
    </>
  )
}

export default Content
