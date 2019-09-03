import React from 'react'
import PropTypes from 'prop-types'

import styles from './HomeNav.module.scss'

const HomeNav = ({ animateScroll, showHome }) => (
  <ul className={showHome ? styles.list : styles.listHidden}>
    <li className={styles.item}>
      <button className={styles.link} onClick={() => animateScroll('about')}>
        {'about'}
      </button>
    </li>
    <li className={styles.item}>
      <button className={styles.link} onClick={() => animateScroll('software')}>
        {'software'}
      </button>
    </li>
    <li className={styles.item}>
      <button className={styles.link} onClick={() => animateScroll('media')}>
        {'media'}
      </button>
    </li>
    <li className={styles.item}>
      <button className={styles.link} onClick={() => animateScroll('connect')}>
        {'connect'}
      </button>
    </li>
    <li className={styles.item}>
      <span className={styles.divider}>
        {'|'}
      </span>
    </li>
    <li className={styles.item}>
      <a className={styles.link} href="/blog" rel="noopener noreferrer">
        {'blog'}
      </a>
    </li>
  </ul>
)

HomeNav.propTypes = {
  animateScroll: PropTypes.func.isRequired,
  showHome: PropTypes.bool.isRequired,
}

export default HomeNav
