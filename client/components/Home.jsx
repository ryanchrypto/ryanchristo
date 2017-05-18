import React, { PropTypes } from 'react'
import Arrow from './Arrow'
import MainNav from './MainNav'
import styles from './Home.scss'

const Home = ({ current, scrollTo, showHome }) => (
  <div id="Home" className={styles.container}>
    <div>
      <MainNav
        current={current}
        scrollTo={scrollTo}
      />
      <Arrow scrollTo={() => scrollTo('About')} />
    </div>
  </div>
)

Home.propTypes = {
  current: PropTypes.string.isRequired,
  scrollTo: PropTypes.func.isRequired,
  showHome: PropTypes.bool.isRequired,
}

export default Home
