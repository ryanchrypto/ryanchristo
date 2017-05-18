import React, { PropTypes } from 'react'
import About from './About'
import Connect from './Connect'
import Development from '../containers/Development'
import DigitalMedia from '../containers/DigitalMedia'
import Home from './Home'
import NavBar from '../containers/NavBar'
import styles from './App.scss'

const App = ({

  current,
  scrollTo,
  showAbout,
  showConnect,
  showDevelopment,
  showDigitalMedia,
  showHome,

}) => {

  let background
  if (showHome) {
    background = styles.background1
  } else if (showAbout) {
    background = styles.background2
  } else if (showDevelopment) {
    background = styles.background3
  } else if (showDigitalMedia) {
    background = styles.background4
  } else if (showConnect) {
    background = styles.background5
  }

  return (
    <div className={styles.container}>
      <div className={background} />
      <NavBar
        current={current}
        scrollTo={scrollTo}
      />
      <Home
        current={current}
        scrollTo={scrollTo}
        showHome={showHome}
      />
      <About
        scrollTo={scrollTo}
        showAbout={showAbout}
      />
      <Development
        scrollTo={scrollTo}
        showDevelopment={showDevelopment}
      />
      <DigitalMedia
        scrollTo={scrollTo}
        showDigitalMedia={showDigitalMedia}
      />
      <Connect
        showConnect={showConnect}
      />
    </div>
  )

}

App.propTypes = {
  current: PropTypes.string.isRequired,
  scrollTo: PropTypes.func.isRequired,
  showAbout: PropTypes.bool.isRequired,
  showConnect: PropTypes.bool.isRequired,
  showDevelopment: PropTypes.bool.isRequired,
  showDigitalMedia: PropTypes.bool.isRequired,
  showHome: PropTypes.bool.isRequired,
}

export default App
