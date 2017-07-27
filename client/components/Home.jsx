import React, { PropTypes } from 'react'
import MainNav from './MainNav'
import styles from './Home.scss'

const Home = ({ scrollTo }) => (
  <div id="Home" className={styles.container}>
    <div>
      <MainNav
        scrollTo={scrollTo}
      />
    </div>
  </div>
)

Home.propTypes = {
  scrollTo: PropTypes.func.isRequired,
}

export default Home
