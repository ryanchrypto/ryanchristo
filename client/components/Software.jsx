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
    <div className={showSoftware ? styles.summary : styles.summaryHidden}>
      <h3>
        {'Software Experience'}
      </h3>
      <p>
        {'Experience developing applications with React, Redux, SCSS, PostCSS, Webpack, Ruby, Rails, Node, Express, MongoDB, PostgreSQL. Currently exploring Web3, Truffle and Ethereum.'}
      </p>
    </div>
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
