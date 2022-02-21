import React from 'react'
import './About.css'
import aboutImage1 from '../images/download.png' 
import aboutImage2 from '../images/Frame 19.png'

const About = (props) => {
  return (
    <div className='about' id='about'>
      <h1>About</h1>
      <p>About My App</p>

          <div className='about1' id='about1'>
          <img src={aboutImage1} alt="" className='about_image' />
          <div className='aboutItem'>
          
            <h2>Get About Us</h2>
            <button>About</button> 
            </div>
            </div>
            
          <div className='about2' id='about2'>
          <img src={aboutImage2} alt="" className='about_image'/>
          <div className='aboutItem'>
          <h2>More About Us</h2>
            <p>Download App and Get About App"</p>
            <button>Download</button> 
            </div> 
            </div>     
    </div>
  )
}

export default About