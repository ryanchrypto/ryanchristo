import React from 'react'

import Projects from '../containers/Projects'
import projects from '../content/media'
import styles from './Media.module.scss'

const Media = () => (
  <div id="media" className={styles.container}>
    <h2 className={styles.title}>{'media'}</h2>
    <div className={styles.summary}>
      <h3>{'Media Experience'}</h3>
      <p>
        {
          'Exprience working with Adobe software including Lightroom, Photoshop and Premiere. Experience with photography, videography, cinematography, audio recording and video editing.'
        }
      </p>
    </div>
    <Projects projects={projects} />
  </div>
)

export default Media
