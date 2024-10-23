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
    <>
    <div className='partner-text'>
          <h2 className={style.sectionHeadText}>Partners</h2>
        </div>
    <div className='banner'>
        {images.map((image,index) => (
          <div key={index} className='item'>
            <img src={image} />
          </div>
        ))}
        
    </div>
    </>
  )
}

export default Features