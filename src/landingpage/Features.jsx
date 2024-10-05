import React from "react";
import styles from "./styles/Features.module.css";
import { closeup, groupfriends } from "../assets";

const Features = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <div className={styles.card_hero}>
          <h1>Mission</h1>
          <div className={styles.img_overlay}></div>
          <img src={closeup} />
        </div>
        <div className={styles.card_info}>
          <p>
            The mission of The Randolph County Caring Community Partnership is
            to serve as a framework to engage the community in action towards
            enhancing the quality of life for all residents. The mission will be
            accomplished by applying the values of Respect, Collaboration,
            Integrity, and Accountability.
          </p>
        </div>
      </div>
      <div className={styles.cards}>
        <div className={styles.card_hero}>
            <h1>Strategy</h1>
            <div className={styles.img_overlay}></div>
            <img src={groupfriends} className={styles.img2}/>
        </div>
        <div className={styles.card_info2}>
            <ul>
                <li>Actively involve our community in decisions that affect their well-being</li>
                <li>Bring services closer to where families live and children attend school</li>
                <li>Use dollars more flexibly and effectively to meet the needs of families</li>
                <li>Be accountable for results</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
