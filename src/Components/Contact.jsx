import React from 'react'
import './Contact.css'


const Contact = () => {
  return (
    <div>
        <div className='contact'>
            <h3>Send us Mail</h3>
            <div className='contact_input'>
                <input type="email" placeholder='example@gmail.com' />
                <a href='#'> Contact</a>
            </div>
        </div>
    </div>
  )
}

export default Contact