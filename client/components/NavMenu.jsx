import React, { PropTypes } from 'react'
import styles from './NavMenu.scss'

const NavMenu = ({ current, scrollTo }) => (
  <ul className={styles.list}>
    <li className={styles.item}>
      <div className={current === 'About' ? styles.active : styles.button} onClick={() => scrollTo('About')}>
        About
      </div>
    </li>
    <li className={styles.item}>
      <div className={current === 'Skills' ? styles.active : styles.button} onClick={() => scrollTo('Skills')}>
        Skills
      </div>
    </li>
    <li className={styles.item}>
      <div className={current === 'Projects' ? styles.active : styles.button} onClick={() => scrollTo('Projects')}>
        Projects
      </div>
    </li>
    <li className={styles.item}>
      <div className={current === 'Contact' ? styles.active : styles.button} onClick={() => scrollTo('Contact')}>
        Contact
      </div>
    </li>
  </ul>
)

NavMenu.propTypes = {
  current: PropTypes.string.isRequired,
  scrollTo: PropTypes.func.isRequired
}

export default NavMenu
