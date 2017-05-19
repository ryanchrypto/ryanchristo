import React, { PropTypes } from 'react'
import Arrow from './Arrow'
import Project from './Project'
import styles from './DigitalMedia.scss'

const DigitalMedia = ({
  currentProject,
  currentView,
  direction,
  nextProject,
  previousProject,
  scrollTo,
  setProject,
  projects
}) => (
  <div id="DigitalMedia" className={styles.container}>
    <h2 className={currentView === 'DigitalMedia' ? styles.title : styles.hidden}>storytelling |</h2>
    <div className={currentView === 'DigitalMedia' ? styles.index : styles.hidden}>
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
    <div className={currentView === 'DigitalMedia' ? styles.leftArrowContainer : styles.hidden}>
      <div className={styles.leftArrow} onClick={previousProject}>
        {'<'}
      </div>
    </div>
    <div className={styles.slideshow}>
      <div className={currentView === 'DigitalMedia' ? styles.projects : styles.hidden}>
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
    <div className={currentView === 'DigitalMedia' ? styles.rightArrowContainer : styles.hidden}>
      <div className={styles.rightArrow} onClick={nextProject}>
        {'>'}
      </div>
    </div>
    <div className={currentView === 'DigitalMedia' ? styles.downArrowContainer : styles.hidden}>
      <Arrow scrollTo={() => scrollTo('Connect')} />
    </div>
  </div>
)

DigitalMedia.propTypes = {
  currentProject: PropTypes.string.isRequired,
  currentView: PropTypes.string.isRequired,
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
  scrollTo: PropTypes.func.isRequired,
  setProject: PropTypes.func.isRequired,
}

export default DigitalMedia
