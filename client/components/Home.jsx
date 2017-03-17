import React from 'react'
import About from './About'
import Contact from './Contact'
import Intro from './Intro'
import Projects from './Projects'
import Skills from './Skills'
import styles from './Home.scss'

const Home = () => (
  <div>
    <div id="intro" className={styles.section1}>
      <Intro />
    </div>
    <div id="about" className={styles.section}>
      <About />
    </div>
    <div id="skills" className={styles.section}>
      <Skills />
    </div>
    <div id="projects" className={styles.section}>
      <Projects />
    </div>
    <div id="contact" className={styles.section2}>
      <Contact />
    </div>
  </div>
)

export default Home
