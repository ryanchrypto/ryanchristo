import React, { PropTypes } from 'react'
import styles from './Slideshow.scss'

const Slideshow = ({
  projects,
  selectedId,
  setProject,
  showProjects,
  slideshowId,
}) => (
  <div className={styles.slideshowContainer}>
    <div id={slideshowId} className={showProjects ? styles.slideshow : styles.slideshowHidden}>
      <div className={styles.slides}>
        {projects.map(project => (
          <div key={project.id} id={project.id} className={selectedId === project.id ? styles.activeSlide : styles.slide}>
            <button
              className={styles.image}
              onClick={() => setProject(project)}
            >
              <img
                alt={project.title}
                className={styles.slideImage}
                src={project.image}
              />
              <div className={styles.slideInfo}>
                <h3>{project.title}</h3>
                <h4>{project.role}</h4>
                <p>{project.dates}</p>
                <p>{project.tags}</p>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
)

Slideshow.propTypes = {
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
  selectedId: PropTypes.number.isRequired,
  setProject: PropTypes.func.isRequired,
  showProjects: PropTypes.bool.isRequired,
  slideshowId: PropTypes.string.isRequired,
}

export default Slideshow
