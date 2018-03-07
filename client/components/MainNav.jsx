import React, { PropTypes } from 'react'
import MainNavList from './MainNavList'
import styles from './MainNav.scss'

const MainNav = ({ scrollTo }) => (
  <div id="mainnav" className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.title}>ryan christoffersen</h1>
      <p className={styles.subtitle}>software developer | media creator | critical thinker</p>
      <MainNavList scrollTo={scrollTo} />
    </div>
  </div>
)

MainNav.propTypes = {
  scrollTo: PropTypes.func.isRequired,
}

export default MainNav
