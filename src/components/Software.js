import React from 'react'

import Projects from '../containers/Projects'
import projects from '../content/software'
import styles from './Software.module.scss'

const Software = () => (
  <div id="software" className={styles.container}>
    <h2 className={styles.title}>{'software'}</h2>
    <Projects projects={projects} />
  </div>
)

export default Software
