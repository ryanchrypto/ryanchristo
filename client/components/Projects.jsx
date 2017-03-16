import React from 'react'
import Project from './Project'
import projects from '../content/projects'
import styles from './Projects.scss'

const Projects = () => (
  <div id="projects" className={styles.container}>
    <h2 className={styles.title}>Projects</h2>
    <div className={styles.projects}>
      {projects.map(project => (
        <Project
          key={project.id}
          {...project}
        />
      ))}
    </div>
  </div>
)

export default Projects
