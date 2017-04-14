import React from 'react'
import styles from './Video.scss'

const Video = () => (
  <div className={styles.container}>
    <video className={styles.bgvid} playsInline autoPlay muted loop>
      <source src="video/bgvideo.mp4" type="video/mp4" />
    </video>
  </div>
)

export default Video
