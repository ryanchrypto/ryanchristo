import React, { PropTypes } from 'react'
import styles from './MainNavList.scss'

const MainNavList = ({ scrollTo }) => (
  <ul className={styles.list}>
    <li className={styles.item}>
      <div className={styles.button} onClick={() => scrollTo('About')}>
        About
      </div>
    </li>
    <li className={styles.item}>
      <div className={styles.button} onClick={() => scrollTo('Development')}>
        Development
      </div>
    </li>
    <li className={styles.item}>
      <div className={styles.button} onClick={() => scrollTo('DigitalMedia')}>
        Storytelling
      </div>
    </li>
    <li className={styles.item}>
      <div className={styles.button} onClick={() => scrollTo('Connect')}>
        Connect
      </div>
    </li>
  </ul>
)

MainNavList.propTypes = {
  scrollTo: PropTypes.func.isRequired,
}

export default MainNavList
