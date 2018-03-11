import React, { PropTypes } from 'react'
import Project from './Project'
import Slideshow from './Slideshow'
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
    <Slideshow
      projects={projects}
      selectedId={selectedId}
      setProject={setProject}
      showProjects={showProjects}
      slideshowId={slideshowId}
    />
    <Project
      nextProject={nextProject}
      previousProject={previousProject}
      projects={projects}
      projectsId={projectsId}
      selectedId={selectedId}
      showProjects={showProjects}
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
        production: PropTypes.string.isRquired,
        repository: PropTypes.string,
      }).isRequired,
      summary: PropTypes.string.isReuquired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  projectsId: PropTypes.string.isRequired,
  selectedId: PropTypes.number.isRequired,
  setProject: PropTypes.func.isRequired,
  showProjects: PropTypes.bool.isRequired,
  slideshowId: PropTypes.string.isRequired,
}

export default Projects
