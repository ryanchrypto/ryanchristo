import React from 'react'
import about from '../content/about'
import styles from './About.scss'

const About = () => (
  <div id="about" className={styles.container}>
    <h2 className={styles.title}>About</h2>
    {about.map(paragraph => (
      <p key={paragraph}>
        {paragraph}
      </p>
    ))}
  </div>
)

export default About
