import React from 'react'
import About from './About'
import Contact from './Contact'
import Intro from './Intro'
import Projects from './Projects'
import Skills from './Skills'
import styles from './Home.scss'

const Home = () => (
  <div className={styles.container}>
    <Intro />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </div>
)

export default Home
