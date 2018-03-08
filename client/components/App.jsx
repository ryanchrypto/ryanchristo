import React, { PropTypes } from 'react'
import About from './About'
import Connect from './Connect'
import Home from './Home'
import Media from '../containers/Media'
import Header from './Header'
import Software from '../containers/Software'
import styles from './App.scss'

const App = ({
  currentView,
  scrollTo,
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
      scrollTo={scrollTo}
      showHeader={showHeader}
    />
    <Home
      scrollTo={scrollTo}
      showHome={showHome}
    />
    <About
      scrollTo={scrollTo}
      showAbout={showAbout}
    />
    <Software
      scrollTo={scrollTo}
      showSoftware={showSoftware}
    />
    <Media
      scrollTo={scrollTo}
      showMedia={showMedia}
    />
    <Connect
      showConnect={showConnect}
    />
  </div>
)

App.propTypes = {
  currentView: PropTypes.string.isRequired,
  scrollTo: PropTypes.func.isRequired,
  showConnect: PropTypes.bool.isRequired,
  showAbout: PropTypes.bool.isRequired,
  showHeader: PropTypes.bool.isRequired,
  showHome: PropTypes.bool.isRequired,
  showMedia: PropTypes.bool.isRequired,
  showSoftware: PropTypes.bool.isRequired,
}

export default App
