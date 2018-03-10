import React, { PropTypes } from 'react'
import Projects from '../containers/Projects'
import projects from '../content/media'
import styles from './Media.scss'

const Media = ({
  showMedia,
}) => (
  <div id="media" className={styles.container}>
    <h2 className={showMedia ? styles.title : styles.titleHidden}>
      {'media'}
    </h2>
    <div className={styles.summary}>
      <p>
        {'Exprience working with Adobe software including Lightroom, Photoshop and Premiere. Experience with photography, videography, cinematography, audio recording and video editing.'}
      </p>
    </div>
    <Projects
      projects={projects}
      showProjects={showMedia}
    />
  </div>
)

Media.propTypes = {
  showMedia: PropTypes.bool.isRequired,
}

export default Media
