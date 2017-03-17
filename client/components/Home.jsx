import React from 'react'
import About from './About'
import Contact from './Contact'
import Intro from './Intro'
import Projects from './Projects'
import Skills from './Skills'
import styles from './Home.scss'
// import parallax from '../styles/parallax.scss'

const Home = () => (
  <div>
    <div className={styles.section1}>
      <Intro />
    </div>
    <About />
    <Skills />
    <Projects />
    <Contact />
  </div>
)

export default Home
