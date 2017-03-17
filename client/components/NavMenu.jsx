import React, { PropTypes } from 'react'
import styles from './NavMenu.scss'

const NavMenu = ({ scrollTo }) => (
  <ul className={styles.list}>
    <li id="navbar-about" className={styles.item}>
      <a className={styles.button} onClick={() => scrollTo('#about')}>
        About
      </a>
    </li>
    <li id="navbar-skills" className={styles.item}>
      <a className={styles.button} onClick={() => scrollTo('#skills')}>
        Skills
      </a>
    </li>
    <li id="navbar-projects" className={styles.item}>
      <a className={styles.button} onClick={() => scrollTo('#projects')}>
        Projects
      </a>
    </li>
    <li id="navbar-contact" className={styles.item}>
      <a className={styles.button} onClick={() => scrollTo('#contact')}>
        Contact
      </a>
    </li>
  </ul>
)

NavMenu.propTypes = {
  scrollTo: PropTypes.func.isRequired
}

export default NavMenu
