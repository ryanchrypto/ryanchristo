import React, { PropTypes } from 'react'
import MainNavList from './MainNavList'
import styles from './MainNav.scss'

const MainNav = ({ current, scrollTo }) => (
  <div id="mainnav" className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.title}>ryan christoffersen</h1>
      <p className={styles.subtitle}>web developer | digital storyteller</p>
      <MainNavList current={current} scrollTo={scrollTo} />
    </div>
  </div>
)

MainNav.propTypes = {
  current: PropTypes.string.isRequired,
  scrollTo: PropTypes.func.isRequired,
}

export default MainNav
