import React from 'react'
import PropTypes from 'prop-types'

import Project from './Project'
import Slideshow from './Slideshow'
import styles from './Projects.module.scss'

const Projects = ({
  nextProject,
  previousProject,
  projects,
  projectsId,
  selectedId,
  setProject,
  slideshowId,
}) => (
  <div className={styles.projects}>
    <Slideshow
      projects={projects}
      selectedId={selectedId}
      setProject={setProject}
      slideshowId={slideshowId}
    />
    <Project
      nextProject={nextProject}
      previousProject={previousProject}
      projects={projects}
      projectsId={projectsId}
      selectedId={selectedId}
    />
  </div>
)

Projects.propTypes = {
  nextProject: PropTypes.func.isRequired,
  previousProject: PropTypes.func.isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      link: PropTypes.shape({
        live: PropTypes.string.isRquired,
        repo: PropTypes.string,
      }).isRequired,
      summary: PropTypes.string.isReuquired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  projectsId: PropTypes.string.isRequired,
  selectedId: PropTypes.number.isRequired,
  setProject: PropTypes.func.isRequired,
  slideshowId: PropTypes.string.isRequired,
}

export default Projects
