import React from 'react'
import { 
  MFH,
  MDSS,
  ymca,
  spartans,
  MRMC,
  healthdept
 } from '../assets'
import { style } from '../style';


const images = [
  MFH,
  MDSS,
  ymca,
  spartans,
  MRMC,
  healthdept
];


const Features = () => {
  return (
    <div className='banner'>
      <div className="slider" style={{ '--quantity': images.length }}>
        {images.map((image,index) => (
          <div key={index} className='item' style={{ '--position': index + 1}}>
            <img src={image} alt={`Feature ${index + 1}`} />
          </div>
        ))}
      </div>
        <div className='partner-text'>
          <h2 className={style.sectionHeadText}>Partners</h2>
        </div>
    </div>
  )
}

export default Features