import React, { PropTypes } from 'react'
import Projects from '../containers/Projects'
import projects from '../content/software'
import styles from './Software.scss'

const Software = ({
  showSoftware,
}) => (
  <div id="software" className={styles.container}>
    <h2 className={showSoftware ? styles.title : styles.titleHidden}>
      {'software'}
    </h2>
    <Projects
      projects={projects}
      showProjects={showSoftware}
    />
  </div>
)

Software.propTypes = {
  showSoftware: PropTypes.bool.isRequired,
}

export default Software
