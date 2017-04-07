import React, { Component } from 'react'
import Projects from '../components/Projects'
import projects from '../content/projects'

class ProjectsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      direction: 'left',
      current: projects[0].id
    }
    this.nextProject = this.nextProject.bind(this)
    this.previousProject = this.previousProject.bind(this)
    this.setProject = this.setProject.bind(this)
  }
  setProject(project) {
    const previous = projects.findIndex(i => i.id === this.state.current)
    const next = projects.findIndex(i => i.id === project.id)
    const direction = previous > next ? 'right' : 'left'
    if (this.state.current !== project) {
      this.setState({
        direction,
        current: project.id
      })
    }
  }
  nextProject() {
    let next = projects.findIndex(i => i.id === this.state.current) + 1
    next = next === projects.length ? next = 0 : next
    this.setState({
      direction: 'left',
      current: projects[next].id
    })
  }
  previousProject() {
    let previous = projects.findIndex(i => i.id === this.state.current) - 1
    previous = previous === -1 ? previous = projects.length - 1 : previous
    this.setState({
      direction: 'right',
      current: projects[previous].id
    })
  }
  render() {
    return (
      <Projects
        current={this.state.current}
        direction={this.state.direction}
        nextProject={this.nextProject}
        previousProject={this.previousProject}
        setProject={this.setProject}
        projects={projects}
      />
    )
  }
}

export default ProjectsContainer
