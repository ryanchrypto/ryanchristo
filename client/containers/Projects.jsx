import React, { Component, PropTypes } from 'react'
import Projects from '../components/Projects'
import animateScroll from '../helpers/animateScroll'

class ProjectsContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedId: this.props.projects[0].id,
    }
    this.nextProject = this.nextProject.bind(this)
    this.previousProject = this.previousProject.bind(this)
    this.setProject = this.setProject.bind(this)
  }

  setProject(project) {
    if (this.state.selectedId !== project) {
      this.setState({
        selectedId: project.id,
      })
    }
    if (project.type === 'software') {
      animateScroll('software-project')
    }
    if (project.type === 'media') {
      animateScroll('media-project')
    }
  }

  nextProject() {
    let next = this.props.projects.findIndex(i => i.id === this.state.selectedId) + 1
    next = next === this.props.projects.length ? next = 0 : next
    this.setState({
      direction: 'left',
      selectedId: this.props.projects[next].id,
    })
  }

  previousProject() {
    let previous = this.props.projects.findIndex(i => i.id === this.state.selectedId) - 1
    previous = previous === -1 ? previous = this.props.projects.length - 1 : previous
    this.setState({
      direction: 'right',
      selectedId: this.props.projects[previous].id,
    })
  }

  render() {
    return (
      <Projects
        nextProject={this.nextProject}
        previousProject={this.previousProject}
        projects={this.props.projects}
        selectedId={this.state.selectedId}
        setProject={this.setProject}
        showProjects={this.props.showProjects}
      />
    )
  }

}

ProjectsContainer.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  showProjects: PropTypes.bool.isRequired,
}

export default ProjectsContainer
