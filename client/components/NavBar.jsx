import React, { PropTypes } from 'react'
import NavMenu from './NavMenu'
import styles from './NavBar.scss'

const NavBar = ({ current, scrollTo, showNavBar }) => (
  <nav className={showNavBar ? styles.container : styles.hidden}>
    <h1 className={styles.title} onClick={() => scrollTo('Home')}>
      ryanchristo
    </h1>
    <NavMenu current={current} scrollTo={scrollTo} />
  </nav>
)

NavBar.propTypes = {
  current: PropTypes.string.isRequired,
  scrollTo: PropTypes.func.isRequired,
  scrollToTop: PropTypes.func.isRequired,
  showNavBar: PropTypes.bool.isRequired
}

export default NavBar
