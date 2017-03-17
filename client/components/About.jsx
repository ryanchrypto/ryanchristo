import React from 'react'
import about from '../content/about'
import styles from './About.scss'

const About = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
      {about.map(paragraph => (
        <p key={paragraph}>
          {paragraph}
        </p>
      ))}
    </div>
  </div>
)

export default About
