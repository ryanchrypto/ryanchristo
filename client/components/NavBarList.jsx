import React, { PropTypes } from 'react'
import styles from './NavBarList.scss'

const NavBarList = ({ currentView, scrollTo }) => (
  <ul className={styles.list}>
    <li className={styles.item}>
      <div className={currentView === 'About' ? styles.active : styles.link} onClick={() => scrollTo('About')}>
        About
      </div>
    </li>
    <li className={styles.item}>
      <div className={currentView === 'Software' ? styles.active : styles.link} onClick={() => scrollTo('Software')}>
        Software
      </div>
    </li>
    <li className={styles.item}>
      <div className={currentView === 'Media' ? styles.active : styles.link} onClick={() => scrollTo('Media')}>
        Media
      </div>
    </li>
    <li className={styles.item}>
      <div className={currentView === 'Connect' ? styles.active : styles.link} onClick={() => scrollTo('Connect')}>
        Connect
      </div>
    </li>
    <li className={styles.divider}>
      {'|'}
    </li>
    <li className={styles.item}>
      <a className={styles.link} href="https://medium.com/@ryanchristo" rel="noopener noreferrer" target="_blank">
        Blog
      </a>
    </li>
  </ul>
)

NavBarList.propTypes = {
  currentView: PropTypes.string.isRequired,
  scrollTo: PropTypes.func.isRequired,
}

export default NavBarList
