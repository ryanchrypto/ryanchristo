import React, { PropTypes } from 'react'
import Project from './Project'
import styles from './Software.scss'

const Software = ({
  currentProject,
  direction,
  nextProject,
  previousProject,
  setProject,
  showSoftware,
  projects,
}) => (
  <div id="software" className={styles.container}>
    <h2 className={showSoftware ? styles.title : styles.titleHidden}>
      {'software |'}
    </h2>
    <div className={showSoftware ? styles.index : styles.indexHidden}>
      {projects.map(project => (
        <span
          key={project.id}
          className={currentProject === project.id ? styles.activeIndexItem : styles.indexItem}
          onClick={() => setProject(project)}
        >
          {project.title}
        </span>
      ))}
    </div>
    <div className={showSoftware ? styles.leftArrowContainer : styles.leftArrowContainerHidden}>
      <div className={styles.leftArrow} onClick={previousProject}>
        {'<'}
      </div>
    </div>
    <div className={styles.slideshow}>
      <div className={showSoftware ? styles.projects : styles.projectsHidden}>
        {projects.map(project => (
          <Project
            key={project.id}
            currentProject={currentProject}
            direction={direction}
            {...project}
          />
        ))}
      </div>
    </div>
    <div className={showSoftware ? styles.rightArrowContainer : styles.rightArrowContainerHidden}>
      <div className={styles.rightArrow} onClick={nextProject}>
        {'>'}
      </div>
    </div>
  </div>
)

Software.propTypes = {
  currentProject: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
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
  setProject: PropTypes.func.isRequired,
  showSoftware: PropTypes.string.isRequired,
}

export default Software
