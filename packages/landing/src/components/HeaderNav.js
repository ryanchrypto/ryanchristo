import React from 'react'
import PropTypes from 'prop-types'

import { pageScroll } from '@ryanchristo/core/helpers/scroll'

import styles from './HeaderNav.module.scss'

const wordsUrl =
  process.env.NODE_ENV === 'production' ? '/words' : 'http://localhost:8080'

const HeaderNav = ({ currentView }) => (
  <ul className={styles.list}>
    <li className={styles.item}>
      <button
        className={currentView === 'about' ? styles.active : styles.link}
        onClick={() => pageScroll('about')}
        type="submit"
      >
        {'about'}
      </button>
    </li>
    <li className={styles.item}>
      <button
        className={currentView === 'software' ? styles.active : styles.link}
        onClick={() => pageScroll('software')}
        type="submit"
      >
        {'software'}
      </button>
    </li>
    <li className={styles.item}>
      <button
        className={currentView === 'media' ? styles.active : styles.link}
        onClick={() => pageScroll('media')}
        type="submit"
      >
        {'media'}
      </button>
    </li>
    <li className={styles.item}>
      <button
        className={currentView === 'connect' ? styles.active : styles.link}
        onClick={() => pageScroll('connect')}
        type="submit"
      >
        {'connect'}
      </button>
    </li>
    <li className={styles.item}>
      <span className={styles.divider}>{'|'}</span>
    </li>
    <li className={styles.item}>
      <a className={styles.link} href={wordsUrl} rel="noopener noreferrer">
        {'words'}
      </a>
    </li>
  </ul>
)

HeaderNav.propTypes = {
  currentView: PropTypes.string.isRequired,
}

export default HeaderNav
