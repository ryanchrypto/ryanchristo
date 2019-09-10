import React from 'react'
import PropTypes from 'prop-types'

import HomeNav from './HomeNav'
import styles from './Home.module.scss'

const Home = ({ showHome }) => (
  <div id="home" className={styles.container}>
    <div className={styles.background} />
    <div className={styles.content}>
      <h1 className={showHome ? styles.title : styles.titleHidden}>
        {'ryan christoffersen'}
      </h1>
      <p className={showHome ? styles.subtitle : styles.subtitleHidden}>
        {'software developer'}
        <span className={styles.divider}>{'|'}</span>
        {'visual storyteller'}
      </p>
      <HomeNav showHome={showHome} />
    </div>
  </div>
)

Home.propTypes = {
  showHome: PropTypes.bool.isRequired,
}

export default Home
