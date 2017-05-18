import React, { PropTypes } from 'react'
import styles from './MainNavList.scss'

const MainNavList = ({ current, scrollTo }) => (
  <ul className={styles.list}>
    <li className={styles.item}>
      <div className={current === 'About' ? styles.active : styles.button} onClick={() => scrollTo('About')}>
        About
      </div>
    </li>
    <li className={styles.item}>
      <div className={current === 'Development' ? styles.active : styles.button} onClick={() => scrollTo('Development')}>
        Development
      </div>
    </li>
    <li className={styles.item}>
      <div className={current === 'DigitalMedia' ? styles.active : styles.button} onClick={() => scrollTo('DigitalMedia')}>
        Storytelling
      </div>
    </li>
    <li className={styles.item}>
      <div className={current === 'Connect' ? styles.active : styles.button} onClick={() => scrollTo('Connect')}>
        Contact
      </div>
    </li>
  </ul>
)

MainNavList.propTypes = {
  current: PropTypes.string.isRequired,
  scrollTo: PropTypes.func.isRequired,
}

export default MainNavList
