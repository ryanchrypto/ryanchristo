import React from 'react'
import PropTypes from 'prop-types'

import About from './About'
import Connect from './Connect'
import Home from './Home'
import Media from './Media'
import Header from './Header'
import Software from './Software'

import styles from './Layout.module.scss'

const Layout = ({ currentView, showConnect, showHeader, showHome }) => (
  <div className={styles.container}>
    <Header currentView={currentView} showHeader={showHeader} />
    <Home showHome={showHome} />
    <About />
    <Software />
    <Media />
    <Connect showConnect={showConnect} />
  </div>
)

Layout.propTypes = {
  currentView: PropTypes.string.isRequired,
  showConnect: PropTypes.bool.isRequired,
  showHeader: PropTypes.bool.isRequired,
  showHome: PropTypes.bool.isRequired,
}

export default Layout
