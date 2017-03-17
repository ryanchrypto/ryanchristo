import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavMenu.scss'

const NavMenu = () => (
  <ul className={styles.list}>
    <li className={styles.item}>
      <NavLink activeClassName={styles.active} className={styles.button} to="/about">
        About
      </NavLink>
    </li>
    <li className={styles.item}>
      <NavLink activeClassName={styles.active} className={styles.button} to="/skills">
        Skills
      </NavLink>
    </li>
    <li className={styles.item}>
      <NavLink activeClassName={styles.active} className={styles.button} to="/projects">
        Projects
      </NavLink>
    </li>
    <li className={styles.item}>
      <NavLink activeClassName={styles.active} className={styles.button} to="/contact">
        Contact
      </NavLink>
    </li>
  </ul>
)

export default NavMenu
