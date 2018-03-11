import React, { PropTypes } from 'react'
import styles from './Project.scss'

const Project = ({
  nextProject,
  previousProject,
  projects,
  projectsId,
  selectedId,
  showProjects,
}) => (
  <div id={projectsId} className={styles.projectContainer}>
    <div className={showProjects ? styles.leftArrowContainer : styles.leftArrowContainerHidden}>
      <button className={styles.arrow} onClick={previousProject}>
        {'<'}
      </button>
    </div>
    {projects.filter(project => project.id === selectedId).map(project => (
      <div key={project.id} className={styles.project}>
        <div className={styles.projectContent}>
          <h3 className={showProjects ? styles.projectTitle : styles.projectTitleHidden}>
            {project.title}
          </h3>
          <img
            alt={project.title}
            className={showProjects ? styles.projectImage : styles.projectImageHidden}
            key={project.id}
            src={project.image}
          />
          <div className={showProjects ? styles.projectText : styles.projectTextHidden}>
            <p className={styles.projectRole}>
              {project.role} | {project.dates}
            </p>
            <p className={styles.projectSummary}>
              {project.summary}
            </p>
            <p className={styles.projectTags}>
              {project.tags}
            </p>
          </div>
          <div className={showProjects ? styles.projectLinks : styles.projectLinksHidden}>
            {project.link.production &&
              <a
                className={styles.projectLink}
                href={project.link.production}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            }
            {project.link.repository &&
              <a
                className={styles.projectLink}
                href={project.link.repository}
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub
              </a>
            }
          </div>
        </div>
      </div>
    ))}
    <div className={showProjects ? styles.rightArrowContainer : styles.rightArrowContainerHidden}>
      <button className={styles.arrow} onClick={nextProject}>
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
  showProjects: PropTypes.bool.isRequired,
}

export default Project
