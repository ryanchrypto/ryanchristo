import React, { PropTypes } from 'react'
import HomeNav from './HomeNav'
import styles from './Home.scss'

const Home = ({ scrollTo }) => (
  <div id="home" className={styles.container}>
    <div className={styles.content}>
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
        scrollTo={scrollTo}
      />
    </div>
  </div>
)

Home.propTypes = {
  scrollTo: PropTypes.func.isRequired,
}

export default Home
