import React from 'react'

import profile from '../assets/img/profile.jpg'

import styles from './About.module.scss'

const About = () => (
  <div id="about" className={styles.container}>
    <h2 className={styles.title}>{'about'}</h2>
    <div className={styles.summary}>
      <img
        alt="Ryan Christoffersen"
        className={styles.summaryImage}
        src={profile}
      />
      <div className={styles.summaryText}>
        <p>
          <strong>{'Software Developer'}</strong>
          {
            '. Interested in free (as in freedom) software and decentralized networks.'
          }
        </p>
        <p>
          <strong>{'Former Filmmaker'}</strong>
          {
            '. Filmed and produced documentaries exploring poverty and microfinance.'
          }
        </p>
      </div>
    </div>
    <div className={styles.skills}>
      <h3>{'Software Skills'}</h3>
      <p>
        {
          'Experience with JavaScript, React, Redux, Webpack, Node, Express, MongoDB, Ruby, Rails, PostgreSQL, IPFS, Web3, Truffle, Solidity, and Ethereum.'
        }
      </p>
      <h3>{'Media Skills'}</h3>
      <p>
        {
          'Experience with production, photography, videography, cinematography, video editing, and Adobe Software including Lightroom, Photoshop and Premiere. '
        }
      </p>
    </div>
  </div>
)

export default About
