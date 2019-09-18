import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Project from './Project'
import Slideshow from './Slideshow'

import { pageScroll, slideScroll } from '@ryanchristo/core/helpers/scroll'

import styles from './Projects.module.scss'

class ProjectsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projectsId: 'software-project',
      selectedId: props.projects[0].id,
      slideshowId: 'software-slideshow',
    }
    this.nextProject = this.nextProject.bind(this)
    this.previousProject = this.previousProject.bind(this)
    this.setProject = this.setProject.bind(this)
  }

  componentDidMount() {
    const { projects } = this.props
    this.setState({
      projectsId: `${projects[0].type}-project`,
      slideshowId: `${projects[0].type}-slideshow`,
    })
  }

  setProject(project) {
    const { projectsId, selectedId, slideshowId } = this.state
    if (selectedId !== project) {
      this.setState({
        selectedId: project.id,
      })
      pageScroll(projectsId)
      slideScroll(slideshowId, project.id)
    }
  }

  nextProject() {
    const { projects } = this.props
    const { projectsId, selectedId, slideshowId } = this.state
    let next = projects.findIndex(i => i.id === selectedId) + 1
    next = next === projects.length ? (next = 0) : next
    this.setState({ selectedId: projects[next].id })
    pageScroll(projectsId)
    slideScroll(slideshowId, projects[next].id)
  }

  previousProject() {
    const { projects } = this.props
    const { projectsId, selectedId, slideshowId } = this.state
    let previous = projects.findIndex(i => i.id === selectedId) - 1
    previous = previous === -1 ? (previous = projects.length - 1) : previous
    this.setState({ selectedId: projects[previous].id })
    pageScroll(projectsId)
    slideScroll(slideshowId, projects[previous].id)
  }

  render() {
    const { projects } = this.props
    const { projectsId, selectedId, slideshowId } = this.state
    return (
      <div className={styles.projects}>
        <Slideshow
          projects={projects}
          selectedId={selectedId}
          setProject={this.setProject}
          slideshowId={slideshowId}
        />
        <Project
          nextProject={this.nextProject}
          previousProject={this.previousProject}
          projects={projects}
          projectsId={projectsId}
          selectedId={selectedId}
        />
      </div>
    )
  }
}

ProjectsContainer.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape()).isRequired,
}

export default ProjectsContainer
