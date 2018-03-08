import React, { PropTypes } from 'react'
import HeaderNav from './HeaderNav'
import styles from './Header.scss'

const Header = ({ currentView, scrollTo, showHeader }) => (
  <header className={showHeader ? styles.header : styles.hidden}>
    <button className={styles.title} onClick={() => scrollTo('home')}>
      {'rc | ryan christoffersen'}
    </button>
    <HeaderNav
      currentView={currentView}
      scrollTo={scrollTo}
    />
  </header>
)

Header.propTypes = {
  currentView: PropTypes.string.isRequired,
  scrollTo: PropTypes.func.isRequired,
  showHeader: PropTypes.bool.isRequired,
}

export default Header
