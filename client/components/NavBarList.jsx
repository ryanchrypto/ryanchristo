import React, { PropTypes } from 'react'
import styles from './NavBarList.scss'

const NavBarList = ({ currentView, scrollTo }) => (
  <ul className={styles.list}>
    <li className={styles.item}>
      <div className={currentView === 'About' ? styles.active : styles.button} onClick={() => scrollTo('About')}>
        About
      </div>
    </li>
    <li className={styles.item}>
      <div className={currentView === 'Development' ? styles.active : styles.button} onClick={() => scrollTo('Development')}>
        Development
      </div>
    </li>
    <li className={styles.item}>
      <div className={currentView === 'DigitalMedia' ? styles.active : styles.button} onClick={() => scrollTo('DigitalMedia')}>
        Storytelling
      </div>
    </li>
    <li className={styles.item}>
      <div className={currentView === 'Connect' ? styles.active : styles.button} onClick={() => scrollTo('Connect')}>
        Connect
      </div>
    </li>
  </ul>
)

NavBarList.propTypes = {
  currentView: PropTypes.string.isRequired,
  scrollTo: PropTypes.func.isRequired,
}

export default NavBarList
