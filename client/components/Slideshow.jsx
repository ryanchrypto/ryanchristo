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
  </div>
)

Slideshow.propTypes = {
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
  selectedId: PropTypes.string.isRequired,
  setProject: PropTypes.func.isRequired,
  showProjects: PropTypes.bool.isRequired,
  slideshowId: PropTypes.string.isRequired,
}

export default Slideshow
