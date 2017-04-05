import React, { PropTypes } from 'react'
import styles from './Arrow.scss'

const Arrow = ({ scrollTo }) => (
  <div className={styles.container}>
    <button className={styles.arrow} onClick={scrollTo}>
      ^
    </button>
  </div>
)

Arrow.propTypes = {
  scrollTo: PropTypes.func.isRequired
}

export default Arrow
