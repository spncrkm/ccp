import React from 'react'
import styles from './styles/Hero.module.css'
import { friendshero } from '../assets'

const Hero = () => {
  return (
    <div className={styles.hero_container}>
      <div className={styles.h1text}>
        <h1>Building a Stronger Community</h1>
        <p>We engage the community in action towards enhancing the quality of life for everyone.</p>
        <button className={styles.btn_hero}>Learn More</button>
      </div>
      <div className={styles.img_container}>
        <img src={friendshero} />
      </div>
        <div className={styles.img_gradient}></div>
      <div className={styles.chatbubble}>
        <div className={styles.text_container}>
        <h1>''</h1>
        </div>
        <div className={styles.text_container2}>
        <h3>I can get the help that I need</h3>
        <p>Richard Client</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
