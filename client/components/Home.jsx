import React, { PropTypes } from 'react'
import HomeNav from './HomeNav'
import styles from './Home.scss'

const Home = ({ animateScroll, showHome }) => (
  <div id="home" className={styles.container}>
    <div className={styles.background} />
    <div className={styles.content}>
      <h1 className={showHome ? styles.title : styles.titleHidden}>
        {'ryan christoffersen'}
      </h1>
      <p className={showHome ? styles.subtitle : styles.subtitleHidden}>
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
        showHome={showHome}
      />
    </div>
  </div>
)

Home.propTypes = {
  animateScroll: PropTypes.func.isRequired,
  showHome: PropTypes.bool.isRequired,
}

export default Home
