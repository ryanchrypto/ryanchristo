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
    <div className={styles.summary}>
      <p>
        {'Working on applications connected to the Ethereum blockchain using React, Redux, SCSS, PostCSS, Webpack, Web3, Truffle. Experience with Ruby, Rails, Node, Express, MongoDB, PostgreSQL.'}
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
