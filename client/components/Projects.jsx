import React, { PropTypes } from 'react'
import styles from './Projects.scss'

const Projects = ({
  nextProject,
  previousProject,
  projects,
  projectsId,
  selectedId,
  setProject,
  showProjects,
  slideshowId,
}) => (
  <div className={styles.projects}>
    <div className={showProjects ? styles.index : styles.indexHidden}>
      {projects.map(project => (
        <button
          key={project.id}
          className={selectedId === project.id ? styles.activeIndexItem : styles.indexItem}
          onClick={() => setProject(project)}
        >
          {project.title}
        </button>
      ))}
    </div>
    <div id={slideshowId} className={showProjects ? styles.slideshow : styles.slideshowHidden}>
      <div className={styles.slideshowContent}>
        {projects.map(project => (
          <button
            id={project.id}
            key={project.id}
            className={selectedId === project.id ? styles.activeImage : styles.image}
            onClick={() => setProject(project)}
          >
            <img
              alt={project.title}
              key={project.id}
              src={project.image}
            />
          </button>
        ))}
      </div>
    </div>
    <div id={projectsId} className={styles.projectContainer}>
      <div className={showProjects ? styles.leftArrowContainer : styles.leftArrowContainerHidden}>
        <button className={styles.leftArrow} onClick={previousProject}>
          {'<'}
        </button>
      </div>
      {projects.filter(project => project.id === selectedId).map(project => (
        <div key={project.id} className={styles.project}>
          <div className={styles.content}>
            <h3 className={showProjects ? styles.title : styles.titleHidden}>
              {project.title}
            </h3>
            <img
              alt={project.title}
              className={showProjects ? styles.projectImage : styles.projectImageHidden}
              key={project.id}
              src={project.image}
            />
            <div className={showProjects ? styles.text : styles.textHidden}>
              <p className={styles.tags}>
                {project.tags}
              </p>
              <p className={styles.summary}>
                {project.summary}
              </p>
            </div>
            <div className={showProjects ? styles.links : styles.linksHidden}>
              <a
                className={styles.link}
                href={project.link.production}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
              {project.link.repository &&
              <a
                className={styles.link}
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
        <button className={styles.rightArrow} onClick={nextProject}>
          {'>'}
        </button>
      </div>
    </div>
  </div>
)

Projects.propTypes = {
  nextProject: PropTypes.func.isRequired,
  previousProject: PropTypes.func.isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
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
  selectedId: PropTypes.string.isRequired,
  setProject: PropTypes.func.isRequired,
  showProjects: PropTypes.bool.isRequired,
  slideshowId: PropTypes.string.isRequired,
}

export default Projects
