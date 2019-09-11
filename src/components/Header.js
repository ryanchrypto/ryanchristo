import React from 'react'
import PropTypes from 'prop-types'

import HeaderNav from './HeaderNav'

import { pageScroll } from '../helpers/scroll'

import styles from './Header.module.scss'

const Header = ({ currentView, showHeader }) => (
  <header className={showHeader ? styles.header : styles.headerHidden}>
    <button
      className={styles.title}
      onClick={() => pageScroll('home')}
      type="submit"
    >
      {'rc | ryan christoffersen'}
    </button>
    <HeaderNav currentView={currentView} />
  </header>
)

Header.propTypes = {
  currentView: PropTypes.string.isRequired,
  showHeader: PropTypes.bool.isRequired,
}

export default Header
