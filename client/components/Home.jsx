import React, { PropTypes } from 'react'
import HomeNav from './HomeNav'
import styles from './Home.scss'

const Home = ({ animateScroll, showHome }) => (
  <div id="home" className={styles.container}>
    <div className={showHome ? styles.content : styles.contentHidden}>
      <h1 className={styles.title}>
        {'ryan christoffersen'}
      </h1>
      <p className={styles.subtitle}>
        {'software developer'}
        <span className={styles.divider}>
          {'|'}
        </span>
        {'media activist'}
        <span className={styles.divider}>
          {'|'}
        </span>
        {'critical thinker'}
      </p>
      <HomeNav
        animateScroll={animateScroll}
      />
    </div>
  </div>
)

Home.propTypes = {
  animateScroll: PropTypes.func.isRequired,
  showHome: PropTypes.bool.isRequired,
}

export default Home
