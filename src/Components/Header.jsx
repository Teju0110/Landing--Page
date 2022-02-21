import React from 'react'
import NavBar from './NavBar'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <NavBar/>
        <div className='name'>
            <h1>It's MY APP </h1>
            <p className=''><span>Launch Your App</span> with confidence and creativity</p>
            <a href='#' className='btn' id='btn'>Download</a>
        </div>
    </div>
  )
}

export default Header