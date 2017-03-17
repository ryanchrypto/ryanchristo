import React, { PropTypes } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavMenu.scss'

const NavMenu = ({ scrollTo }) => (
  <ul className={styles.list}>
    <li className={styles.item}>
      <NavLink activeClassName={styles.active} to="/about">
        About
      </NavLink>
      <a className={styles.button} onClick={() => scrollTo('#about')}>
        About
      </a>
    </li>
    <li className={styles.item}>
      <NavLink activeClassName={styles.active} to="/skills">
        Skills
      </NavLink>
      <a className={styles.button} onClick={() => scrollTo('#skills')}>
        Skills
      </a>
    </li>
    <li className={styles.item}>
      <NavLink activeClassName={styles.active} to="/projects">
        Projects
      </NavLink>
      <a className={styles.button} onClick={() => scrollTo('#projects')}>
        Projects
      </a>
    </li>
    <li className={styles.item}>
      <NavLink activeClassName={styles.active} to="/contact">
        Contact
      </NavLink>
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
