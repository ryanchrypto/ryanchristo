import React from 'react'
import PropTypes from 'prop-types'

import HeaderNav from './HeaderNav'
import styles from './Header.module.scss'

const Header = ({ currentView, animateScroll, showHeader }) => (
  <header className={showHeader ? styles.header : styles.headerHidden}>
    <button className={styles.title} onClick={() => animateScroll('home')}>
      {'rc | ryan christoffersen'}
    </button>
    <HeaderNav
      currentView={currentView}
      animateScroll={animateScroll}
    />
  </header>
)

Header.propTypes = {
  currentView: PropTypes.string.isRequired,
  animateScroll: PropTypes.func.isRequired,
  showHeader: PropTypes.bool.isRequired,
}

export default Header
