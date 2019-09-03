import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Projects from '../components/Projects'
import animateScroll from '../helpers/animateScroll'
import animateSlideshow from '../helpers/animateSlideshow'

class ProjectsContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      projectsId: 'software-project',
      selectedId: this.props.projects[0].id,
      slideshowId: 'software-slideshow',
    }
    this.nextProject = this.nextProject.bind(this)
    this.previousProject = this.previousProject.bind(this)
    this.setProject = this.setProject.bind(this)
  }

  componentDidMount() {
    this.setState({
      projectsId: `${this.props.projects[0].type}-project`,
      slideshowId: `${this.props.projects[0].type}-slideshow`,
    })
  }

  setProject(project) {
    if (this.state.selectedId !== project) {
      this.setState({
        selectedId: project.id,
      })
      animateScroll(this.state.projectsId)
      animateSlideshow(this.state.slideshowId, project.id)
    }
  }

  nextProject() {
    let next = this.props.projects.findIndex(i => i.id === this.state.selectedId) + 1
    next = next === this.props.projects.length ? next = 0 : next
    this.setState({
      direction: 'left',
      selectedId: this.props.projects[next].id,
    })
    animateScroll(this.state.projectsId)
    animateSlideshow(this.state.slideshowId, this.props.projects[next].id)
  }

  previousProject() {
    let previous = this.props.projects.findIndex(i => i.id === this.state.selectedId) - 1
    previous = previous === -1 ? previous = this.props.projects.length - 1 : previous
    this.setState({
      direction: 'right',
      selectedId: this.props.projects[previous].id,
    })
    animateScroll(this.state.projectsId)
    animateSlideshow(this.state.slideshowId, this.props.projects[previous].id)
  }

  render() {
    return (
      <Projects
        nextProject={this.nextProject}
        previousProject={this.previousProject}
        projects={this.props.projects}
        projectsId={this.state.projectsId}
        selectedId={this.state.selectedId}
        setProject={this.setProject}
        showProjects={this.props.showProjects}
        slideshowId={this.state.slideshowId}
      />
    )
  }

}

ProjectsContainer.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  showProjects: PropTypes.bool.isRequired,
}

export default ProjectsContainer
