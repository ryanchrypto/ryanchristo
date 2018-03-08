import React, { Component, PropTypes } from 'react'
import Software from '../components/Software'
import projects from '../content/software'

class SoftwareContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      direction: 'left',
      currentProject: projects[0].id,
    }
    this.nextProject = this.nextProject.bind(this)
    this.previousProject = this.previousProject.bind(this)
    this.setProject = this.setProject.bind(this)
  }
  setProject(project) {
    const previous = projects.findIndex(i => i.id === this.state.currentProject)
    const next = projects.findIndex(i => i.id === project.id)
    const direction = previous > next ? 'right' : 'left'
    if (this.state.currentProject !== project) {
      this.setState({
        direction,
        currentProject: project.id,
      })
    }
  }
  nextProject() {
    let next = projects.findIndex(i => i.id === this.state.currentProject) + 1
    next = next === projects.length ? next = 0 : next
    this.setState({
      direction: 'left',
      currentProject: projects[next].id,
    })
  }
  previousProject() {
    let previous = projects.findIndex(i => i.id === this.state.currentProject) - 1
    previous = previous === -1 ? previous = projects.length - 1 : previous
    this.setState({
      direction: 'right',
      currentProject: projects[previous].id,
    })
  }
  render() {
    return (
      <Software
        currentProject={this.state.currentProject}
        direction={this.state.direction}
        nextProject={this.nextProject}
        previousProject={this.previousProject}
        setProject={this.setProject}
        projects={projects}
        {...this.props}
      />
    )
  }
}

export default SoftwareContainer
