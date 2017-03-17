import React from 'react'
import { Motion, spring } from 'react-motion'
import About from './About'
import Contact from './Contact'
import Intro from './Intro'
import Projects from './Projects'
import Skills from './Skills'
import styles from './Home.scss'

const Home = () => (
  <Motion defaultStyle={{ opacity: 0 }} style={{ opacity: spring(1, { stiffness: 60 }) }}>
    {value => (
      <div style={{ opacity: value.opacity }}>
        <div id="intro" className={styles.section1}>
          <Intro />
        </div>
        <div id="about" className={styles.section2}>
          <About />
        </div>
        <div id="skills" className={styles.section1}>
          <Skills />
        </div>
        <div id="projects" className={styles.section2}>
          <Projects />
        </div>
        <div id="contact" className={styles.section1}>
          <Contact />
        </div>
      </div>
    )}
  </Motion>
)

export default Home
