import React, { PropTypes } from 'react'
import About from './About'
import Connect from './Connect'
import Development from '../containers/Development'
import DigitalMedia from '../containers/DigitalMedia'
import Home from './Home'
import NavBar from '../containers/NavBar'
import styles from './App.scss'

const App = ({
  currentView,
  scrollTo,
}) => {
  let background
  if (currentView === 'Home') {
    background = styles.background1
  } else if (currentView === 'About') {
    background = styles.background2
  } else if (currentView === 'Development') {
    background = styles.background3
  } else if (currentView === 'DigitalMedia') {
    background = styles.background4
  } else if (currentView === 'Connect') {
    background = styles.background5
  }
  return (
    <div className={styles.container}>
      <div className={background} />
      <NavBar
        currentView={currentView}
        scrollTo={scrollTo}
      />
      <Home
        currentView={currentView}
        scrollTo={scrollTo}
      />
      <About
        currentView={currentView}
        scrollTo={scrollTo}
      />
      <Development
        currentView={currentView}
        scrollTo={scrollTo}
      />
      <DigitalMedia
        currentView={currentView}
        scrollTo={scrollTo}
      />
      <Connect
        currentView={currentView}
      />
    </div>
  )
}

App.propTypes = {
  currentView: PropTypes.string.isRequired,
  scrollTo: PropTypes.func.isRequired,
}

export default App
