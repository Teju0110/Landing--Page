import React from 'react'
import './FeatureBox.css'

const FeatureBox = (props) => {
  return (
    <div className='featureBox'>
        <div className='image'>
            <img src={props.image}/>
        </div>
        <div className='text'>
            <h2>{props.title}</h2>
            <p>Features of My App</p>
        </div>
    </div>
  )
}

export default FeatureBox