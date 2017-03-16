import React, { PropTypes } from 'react'
import Button from './Button'
import styles from './Project.scss'

const Project = ({ summary, title, link: { production, repository } }) => (
  <div className={styles.container}>
    <h3 className={styles.title}>{title}</h3>
    <p>{summary}</p>
    <div className={styles.buttons}>
      <Button link={production}>
        View Project
      </Button>
      <Button link={repository}>
        View GitHub
      </Button>
    </div>
  </div>
)

Project.propTypes = {
  summary: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.shape({
    production: PropTypes.string.isRequired,
    repository: PropTypes.string.isRequired
  }).isRequired
}

export default Project
