import React from 'react'
import PropTypes from 'prop-types'

import styles from './Project.module.scss'

const Project = ({
  nextProject,
  previousProject,
  projects,
  projectsId,
  selectedId,
}) => (
  <div id={projectsId} className={styles.projectContainer}>
    <div className={styles.leftArrowContainer}>
      <button className={styles.arrow} onClick={previousProject} type="submit">
        {'<'}
      </button>
    </div>
    {projects
      .filter(project => project.id === selectedId)
      .map(project => (
        <div key={project.id} className={styles.project}>
          <div className={styles.projectContent}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <img
              alt={project.title}
              className={styles.projectImage}
              key={project.id}
              src={project.image}
            />
            <div className={styles.projectText}>
              <p className={styles.projectRole}>
                {project.role}
                {' | '}
                {project.dates}
              </p>
              <p className={styles.projectSummary}>{project.summary}</p>
              <p className={styles.projectTags}>{project.tags}</p>
            </div>
            <div className={styles.projectLinks}>
              {project.link.production && (
                <a
                  className={styles.projectLink}
                  href={project.link.production}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {'View Project'}
                </a>
              )}
              {project.link.repository && (
                <a
                  className={styles.projectLink}
                  href={project.link.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {'View GitHub'}
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    <div className={styles.rightArrowContainer}>
      <button className={styles.arrow} onClick={nextProject} type="submit">
        {'>'}
      </button>
    </div>
  </div>
)

Project.propTypes = {
  nextProject: PropTypes.func.isRequired,
  previousProject: PropTypes.func.isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      link: PropTypes.shape({
        production: PropTypes.string.isRquired,
        repository: PropTypes.string,
      }).isRequired,
      summary: PropTypes.string.isReuquired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  projectsId: PropTypes.string.isRequired,
  selectedId: PropTypes.number.isRequired,
}

export default Project
