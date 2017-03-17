import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'
import NavMenu from './NavMenu'
import styles from './Nav.scss'

const Nav = ({ mobile, scrollTo, toggle }) => (
  <nav id="navbar" className={styles.container}>
    {mobile &&
      <button toggle={toggle}>
        Menu
      </button>
    }
    <Link to="/">
      ryanchristo
    </Link>
    <a id="navbar-home" className={styles.title} onClick={() => scrollTo('#intro')}>
      ryanchristo
    </a>
    <NavMenu
      scrollTo={scrollTo}
    />
  </nav>
)

Nav.propTypes = {
  mobile: PropTypes.bool.isRequired,
  scrollTo: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired
}

export default Nav
