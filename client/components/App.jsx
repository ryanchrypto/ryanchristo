import React, { PropTypes } from 'react'
import About from './About'
import Arrow from './Arrow'
import Contact from './Contact'
import Cursor from '../containers/Cursor'
import MainNav from './MainNav'
import NavBar from '../containers/NavBar'
import Projects from './Projects'
import Skills from './Skills'
import Three from '../containers/Three'
import styles from './App.scss'

const App = ({
  current,
  scrollTo,
  showAbout,
  showContact,
  showHome,
  showProjects,
  showSkills,
  showThree,
  toggleThree
}) => (
  <div className={styles.container}>
    <NavBar
      current={current}
      scrollTo={scrollTo}
    />
    <div className={styles.sections}>
      <div id="Home" className={showHome ? styles.section : styles.hidden}>
        <Three showThree={showThree} />
        <MainNav
          current={current}
          scrollTo={scrollTo}
          toggleThree={toggleThree}
        />
        <Arrow scrollTo={() => scrollTo('About')} />
      </div>
      <div id="About" className={showAbout ? styles.section : styles.hidden}>
        <About />
        <Arrow scrollTo={() => scrollTo('Skills')} />
      </div>
      <div id="Skills" className={showSkills ? styles.section : styles.hidden}>
        <Skills />
        <Arrow scrollTo={() => scrollTo('Projects')} />
      </div>
      <div id="Projects" className={showProjects ? styles.section : styles.hidden}>
        <Projects />
        <Arrow scrollTo={() => scrollTo('Contact')} />
      </div>
      <div id="Contact" className={showContact ? styles.section : styles.hidden}>
        <Contact />
      </div>
    </div>
  </div>
)

App.propTypes = {
  current: PropTypes.string.isRequired,
  scrollTo: PropTypes.func.isRequired,
  showAbout: PropTypes.bool.isRequired,
  showContact: PropTypes.bool.isRequired,
  showHome: PropTypes.bool.isRequired,
  showProjects: PropTypes.bool.isRequired,
  showSkills: PropTypes.bool.isRequired,
  showThree: PropTypes.bool.isRequired,
  toggleThree: PropTypes.func.isRequired
}

export default App
