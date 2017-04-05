import React, { PropTypes } from 'react'
import NavMenu from './NavMenu'
import styles from './MainNav.scss'

const MainNav = ({ current, scrollTo, toggleThree }) => (
  <div className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.title} onClick={toggleThree}>ryanchristo</h1>
      <NavMenu current={current} scrollTo={scrollTo} />
    </div>
  </div>
)

MainNav.propTypes = {
  current: PropTypes.string.isRequired,
  scrollTo: PropTypes.func.isRequired,
  toggleThree: PropTypes.func.isRequired
}

export default MainNav
