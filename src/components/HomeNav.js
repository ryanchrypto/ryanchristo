import React from 'react'
import PropTypes from 'prop-types'

import animateScroll from '../helpers/animateScroll'

import styles from './HomeNav.module.scss'

const HomeNav = ({ showHome }) => (
  <ul className={showHome ? styles.list : styles.listHidden}>
    <li className={styles.item}>
      <button
        className={styles.link}
        onClick={() => animateScroll('about')}
        type="submit"
      >
        {'about'}
      </button>
    </li>
    <li className={styles.item}>
      <button
        className={styles.link}
        onClick={() => animateScroll('software')}
        type="submit"
      >
        {'software'}
      </button>
    </li>
    <li className={styles.item}>
      <button
        className={styles.link}
        onClick={() => animateScroll('media')}
        type="submit"
      >
        {'media'}
      </button>
    </li>
    <li className={styles.item}>
      <button
        className={styles.link}
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

HomeNav.propTypes = {
  showHome: PropTypes.bool.isRequired,
}

export default HomeNav
