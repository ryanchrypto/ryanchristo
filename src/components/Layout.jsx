import React from 'react'
import PropTypes from 'prop-types'

import About from './About'
import Connect from './Connect'
import Home from './Home'
import Media from './Media'
import Header from './Header'
import Software from './Software'
import styles from './Layout.module.scss'

const Layout = ({
  currentView,
  animateScroll,
  showAbout,
  showConnect,
  showHeader,
  showHome,
  showMedia,
  showSoftware,
}) => (
  <div className={styles.container}>
    <Header
      currentView={currentView}
      animateScroll={animateScroll}
      showHeader={showHeader}
    />
    <Home
      animateScroll={animateScroll}
      showHome={showHome}
    />
    <About
      animateScroll={animateScroll}
      showAbout={showAbout}
    />
    <Software
      animateScroll={animateScroll}
      showSoftware={showSoftware}
    />
    <Media
      animateScroll={animateScroll}
      showMedia={showMedia}
    />
    <Connect
      showConnect={showConnect}
    />
  </div>
)

Layout.propTypes = {
  currentView: PropTypes.string.isRequired,
  animateScroll: PropTypes.func.isRequired,
  showConnect: PropTypes.bool.isRequired,
  showAbout: PropTypes.bool.isRequired,
  showHeader: PropTypes.bool.isRequired,
  showHome: PropTypes.bool.isRequired,
  showMedia: PropTypes.bool.isRequired,
  showSoftware: PropTypes.bool.isRequired,
}

export default Layout
