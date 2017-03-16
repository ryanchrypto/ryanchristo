import React from 'react'
import styles from './NavMenu.scss'

const NavMenu = () => (
  <ul className={styles.list}>
    <li id="navbar-about" className={styles.item}>
      <a className={styles.button}>About</a>
    </li>
    <li id="navbar-skills" className={styles.item}>
      <a className={styles.button}>Skills</a>
    </li>
    <li id="navbar-projects" className={styles.item}>
      <a className={styles.button}>Projects</a>
    </li>
    <li id="navbar-contact" className={styles.item}>
      <a className={styles.button}>Contact</a>
    </li>
  </ul>
)

export default NavMenu
