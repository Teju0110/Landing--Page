import React from 'react'
import './Presentation.css'
import presentationImg from '../images/presentation.png'

const Presentation = () => {
  return (
    <div className='presentation' id='presentation'>
        <h2>Presentation</h2>
        <p>My App Presentation</p>
        <img className='presentationImg' src={presentationImg} alt=''/>
    </div>
  )
}

export default Presentation