import React from 'react'
import PropTypes from 'prop-types'

import styles from './HeaderNav.module.scss'

const HeaderNav = ({ currentView, animateScroll }) => (
  <ul className={styles.list}>
    <li className={styles.item}>
      <button
        className={currentView === 'about' ? styles.active : styles.link}
        onClick={() => animateScroll('about')}
        type="submit"
      >
        {'about'}
      </button>
    </li>
    <li className={styles.item}>
      <button
        className={currentView === 'software' ? styles.active : styles.link}
        onClick={() => animateScroll('software')}
        type="submit"
      >
        {'software'}
      </button>
    </li>
    <li className={styles.item}>
      <button
        className={currentView === 'media' ? styles.active : styles.link}
        onClick={() => animateScroll('media')}
        type="submit"
      >
        {'media'}
      </button>
    </li>
    <li className={styles.item}>
      <button
        className={currentView === 'connect' ? styles.active : styles.link}
        onClick={() => animateScroll('connect')}
        type="submit"
      >
        {'connect'}
      </button>
    </li>
    <li className={styles.item}>
      <span className={styles.divider}>{'|'}</span>
    </li>
    <li className={styles.item}>
      <a className={styles.link} href="/blog" rel="noopener noreferrer">
        {'blog'}
      </a>
    </li>
  </ul>
)

HeaderNav.propTypes = {
  currentView: PropTypes.string.isRequired,
  animateScroll: PropTypes.func.isRequired,
}

export default HeaderNav
