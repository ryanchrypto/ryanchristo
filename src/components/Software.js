import React from 'react'

import Projects from '../containers/Projects'
import projects from '../content/software'
import styles from './Software.module.scss'

const Software = () => (
  <div id="software" className={styles.container}>
    <h2 className={styles.title}>{'software'}</h2>
    <div className={styles.summary}>
      <h3>{'Software Experience'}</h3>
      <p>
        {
          'Experience developing applications with React, Redux, SCSS, PostCSS, Webpack, Ruby, Rails, Node, Express, MongoDB, PostgreSQL. Currently exploring Web3, Truffle and Ethereum.'
        }
      </p>
    </div>
    <Projects projects={projects} />
  </div>
)

export default Software
