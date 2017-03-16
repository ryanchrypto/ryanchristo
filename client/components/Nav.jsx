import React, { PropTypes } from 'react'
import NavMenu from './NavMenu'
import styles from './Nav.scss'

const Nav = ({ mobile, toggle }) => (
  <nav id="navbar" className={styles.container}>
    {mobile &&
      <button toggle={toggle}>
        Menu
      </button>
    }
    <a id="navbar-home" className={styles.title}>
      ryanchristo
    </a>
    <NavMenu />
  </nav>
)

Nav.propTypes = {
  mobile: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
}

export default Nav
