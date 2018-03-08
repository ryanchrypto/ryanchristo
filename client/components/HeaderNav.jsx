import React, { PropTypes } from 'react'
import styles from './HeaderNav.scss'

const HeaderNav = ({ currentView, scrollTo }) => (
  <ul className={styles.list}>
    <li className={styles.item}>
      <button className={currentView === 'about' ? styles.active : styles.link} onClick={() => scrollTo('about')}>
        {'about'}
      </button>
    </li>
    <li className={styles.item}>
      <button className={currentView === 'software' ? styles.active : styles.link} onClick={() => scrollTo('software')}>
        {'software'}
      </button>
    </li>
    <li className={styles.item}>
      <button className={currentView === 'media' ? styles.active : styles.link} onClick={() => scrollTo('media')}>
        {'media'}
      </button>
    </li>
    <li className={styles.item}>
      <button className={currentView === 'connect' ? styles.active : styles.link} onClick={() => scrollTo('connect')}>
        {'connect'}
      </button>
    </li>
    <li className={styles.item}>
      <span className={styles.divider}>
        {'|'}
      </span>
    </li>
    <li className={styles.item}>
      <a className={styles.link} href="https://medium.com/@ryanchristo" rel="noopener noreferrer" target="_blank">
        {'blog'}
      </a>
    </li>
  </ul>
)

HeaderNav.propTypes = {
  currentView: PropTypes.string.isRequired,
  scrollTo: PropTypes.func.isRequired,
}

export default HeaderNav
