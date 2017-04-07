import React, { PropTypes } from 'react'
import Project from './Project'
import styles from './Projects.scss'

const Projects = ({ current, direction, nextProject, previousProject, setProject, projects }) => (
  <div className={styles.container}>
    <h2 className={styles.title}>Projects</h2>
    <div className={styles.index}>
      {projects.map(project => (
        <span key={project.id} className={current === project.id ? styles.activeIndexItem : styles.indexItem} onClick={() => setProject(project)}>
          {project.title}
        </span>
      ))}
    </div>
    <div className={styles.slideshow}>
      <div className={styles.leftArrowContainer}>
        <div className={styles.leftArrow} onClick={previousProject}>
          {'<'}
        </div>
      </div>
      <div className={styles.projects}>
        {projects.map(project => (
          <Project
            key={project.id}
            current={current}
            direction={direction}
            {...project}
          />
        ))}
      </div>
      <div className={styles.rightArrowContainer}>
        <div className={styles.rightArrow} onClick={nextProject}>
          {'>'}
        </div>
      </div>
    </div>
  </div>
)

Projects.propTypes = {
  current: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  nextProject: PropTypes.func.isRequired,
  previousProject: PropTypes.func.isRequired,
  setProject: PropTypes.func.isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      link: PropTypes.shape({
        production: PropTypes.string.isRquired,
        repository: PropTypes.string
      }).isRequired,
      summary: PropTypes.string.isReuquired,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default Projects
