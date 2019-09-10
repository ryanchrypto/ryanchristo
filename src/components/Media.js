import React from 'react'

import Projects from '../containers/Projects'
import projects from '../content/media'
import styles from './Media.module.scss'

const Media = () => (
  <div id="media" className={styles.container}>
    <h2 className={styles.title}>{'media'}</h2>
    <Projects projects={projects} />
  </div>
)

export default Media
