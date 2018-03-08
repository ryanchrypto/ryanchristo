import React, { PropTypes } from 'react'
import HeaderNav from './HeaderNav'
import styles from './Header.scss'

const Header = ({ currentView, scrollTo, showHeader }) => (
  <nav className={showHeader ? styles.container : styles.hidden}>
    <h1 className={styles.title} onClick={() => scrollTo('home')}>
      rc | ryan christoffersen
    </h1>
    <HeaderNav currentView={currentView} scrollTo={scrollTo} />
  </nav>
)

Header.propTypes = {
  currentView: PropTypes.string.isRequired,
  scrollTo: PropTypes.func.isRequired,
  showHeader: PropTypes.bool.isRequired
}

export default Header
