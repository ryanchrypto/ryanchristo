import React, { PropTypes } from 'react'
import styles from './MainNavList.scss'

const MainNavList = ({ scrollTo }) => (
  <ul className={styles.list}>
    <li className={styles.item}>
      <div className={styles.link} onClick={() => scrollTo('About')}>
        About
      </div>
    </li>
    <li className={styles.item}>
      <div className={styles.link} onClick={() => scrollTo('Software')}>
        Software
      </div>
    </li>
    <li className={styles.item}>
      <div className={styles.link} onClick={() => scrollTo('Media')}>
        Media
      </div>
    </li>
    <li className={styles.item}>
      <div className={styles.link} onClick={() => scrollTo('Connect')}>
        Connect
      </div>
    </li>
    <li className={styles.item}>
      {'|'}
    </li>
    <li className={styles.item}>
      <a className={styles.link} href="https://medium.com/@ryanchristo" rel="noopener noreferrer" target="_blank">
        Blog
      </a>
    </li>
  </ul>
)

MainNavList.propTypes = {
  scrollTo: PropTypes.func.isRequired,
}

export default MainNavList
