import React, { PropTypes } from 'react'
import Arrow from './Arrow'
import Project from './Project'
import styles from './Development.scss'

const Development = ({ current, direction, nextProject, previousProject, scrollTo, setProject, showDevelopment, projects }) => (
  <div id="Development" className={styles.container}>
    <h2 className={showDevelopment ? styles.title : styles.hidden}>development |</h2>
    <div className={showDevelopment ? styles.index : styles.hidden}>
      {projects.map(project => (
        <span
          key={project.id}
          className={current === project.id ? styles.activeIndexItem : styles.indexItem}
          onClick={() => setProject(project)}
        >
          {project.title}
        </span>
      ))}
    </div>
    <div className={showDevelopment ? styles.leftArrowContainer : styles.hidden}>
      <div className={styles.leftArrow} onClick={previousProject}>
        {'<'}
      </div>
    </div>
    <div className={styles.slideshow}>
      <div className={showDevelopment ? styles.projects : styles.hidden}>
        {projects.map(project => (
          <Project
            key={project.id}
            current={current}
            direction={direction}
            {...project}
          />
        ))}
      </div>
    </div>
    <div className={showDevelopment ? styles.rightArrowContainer : styles.hidden}>
      <div className={styles.rightArrow} onClick={nextProject}>
        {'>'}
      </div>
    </div>
    <div className={showDevelopment ? styles.downArrowContainer : styles.hidden}>
      <Arrow scrollTo={() => scrollTo('DigitalMedia')} />
    </div>
  </div>
)

Development.propTypes = {
  current: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  nextProject: PropTypes.func.isRequired,
  previousProject: PropTypes.func.isRequired,
  scrollTo: PropTypes.func.isRequired,
  setProject: PropTypes.func.isRequired,
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
  showDevelopment: PropTypes.bool.isRequired,
}

export default Development
