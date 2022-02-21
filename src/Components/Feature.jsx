import React from 'react'
import FeatureBox from './FeatureBox'
import './Features.css'
import feature_1 from '../images/feature_1.png'
import feature_2 from '../images/feature_2.png'
import feature_3 from '../images/feature_3.png'

const Feature = () => {
  return (
    <div className='feature' id='feature'>
      <h1>Features</h1>
      <p>My App Features</p>
        <div className='container'>
            
            <FeatureBox image={feature_1} title="Development Course" />
            <FeatureBox image={feature_2} title="Development Course" />
            <FeatureBox image={feature_3} title="Development Course" />
            
        </div>
    </div>
  )
}

export default Feature