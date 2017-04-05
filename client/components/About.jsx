import React from 'react'
import about from '../content/about'
import styles from './About.scss'

const About = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
      <img className={styles.image} alt="profile" src="img/profile_2016.jpg" />
      <div className={styles.text}>
        {about.map(paragraph => (
          <p key={paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  </div>
)

export default About
