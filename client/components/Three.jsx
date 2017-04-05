import React, { PropTypes } from 'react'
import styles from './Three.scss'

const Three = ({ showThree }) => (
  <div className={showThree ? styles.container : styles.hidden}>
    <canvas id="three" className={styles.canvas} />
  </div>
)

Three.propTypes = {
  showThree: PropTypes.bool.isRequired
}

export default Three
