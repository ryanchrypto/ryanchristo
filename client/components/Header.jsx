import React from 'react'
import Nav from './Nav'
import styles from './Header.scss'

const Header = () => (
  <header className={styles.container}>
    <Nav />
  </header>
)

export default Header
