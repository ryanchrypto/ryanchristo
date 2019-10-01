import React from 'react'
import PropTypes from 'prop-types'

import { pageScroll } from '@ryanchristo/core/helpers/scroll'

import styles from './HomeNav.module.scss'

const docsUrl =
  process.env.NODE_ENV === 'production' ? '/docs' : 'http://localhost:8080'

const HomeNav = ({ showHome }) => (
  <ul className={showHome ? styles.list : styles.listHidden}>
    <li className={styles.item}>
      <button
        className={styles.link}
        onClick={() => pageScroll('about')}
        type="submit"
      >
        {'about'}
      </button>
    </li>
    <li className={styles.item}>
      <button
        className={styles.link}
        onClick={() => pageScroll('software')}
        type="submit"
      >
        {'software'}
      </button>
    </li>
    <li className={styles.item}>
      <button
        className={styles.link}
        onClick={() => pageScroll('media')}
        type="submit"
      >
        {'media'}
      </button>
    </li>
    <li className={styles.item}>
      <button
        className={styles.link}
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
      <a className={styles.link} href={docsUrl} rel="noopener noreferrer">
        {'docs'}
      </a>
    </li>
  </ul>
)

HomeNav.propTypes = {
  showHome: PropTypes.bool.isRequired,
}

export default HomeNav
