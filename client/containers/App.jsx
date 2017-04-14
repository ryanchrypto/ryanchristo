import React, { Component } from 'react'
import App from '../components/App'

const scrollTo = (id) => {
  const start = window.pageYOffset
  const end = document.getElementById(id).offsetTop - 50
  const distance = end - start
  const duration = 600
  const increment = 20
  let currentTime = 0
  Math.easeInOutQuad = (currentTime, start, distance, duration) => {
    currentTime /= (duration / 2)
    if (currentTime < 1) {
      return distance / 2 * currentTime * currentTime + start
    }
    currentTime--
    return -distance / 2 * (currentTime * (currentTime - 2) - 1) + start
  }
  const animateScroll = () => {
    currentTime += increment
    const val = Math.easeInOutQuad(currentTime, start, distance, duration)
    window.scroll(0, val)
    if (currentTime < duration) {
      setTimeout(animateScroll, increment)
    }
  }
  animateScroll()
}

class AppContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 'Home',
      positionY: 0,
      showAbout: false,
      showContact: false,
      showHome: true,
      showProjects: false,
      showSkills: false,
      playVideo: true
    }
    this.handleScrollEvent = this.handleScrollEvent.bind(this)
    this.toggleVideo = this.toggleVideo.bind(this)
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScrollEvent)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollEvent)
  }
  handleScrollEvent() {
    const about = document.getElementById('About').getBoundingClientRect().top
    const contact = document.getElementById('Contact').getBoundingClientRect().top
    const home = document.getElementById('Home').getBoundingClientRect().top
    const projects = document.getElementById('Projects').getBoundingClientRect().top
    const skills = document.getElementById('Skills').getBoundingClientRect().top
    if (!this.state.showHome && about > 500 && home > -500) {
      this.setState({
        current: 'Home',
        showHome: true
      })
    } else if (this.state.showHome && home < -500) {
      this.setState({
        showHome: false
      })
    }
    if (!this.state.showAbout && about < 500 && about > -500) {
      this.setState({
        current: 'About',
        showAbout: true
      })
    } else if (this.state.showAbout && (about < -500 || about > 500)) {
      this.setState({
        showAbout: false
      })
    }
    if (!this.state.showContact && contact < 500 && contact > -500) {
      this.setState({
        current: 'Contact',
        showContact: true
      })
    } else if (this.state.showContact && (contact < -500 || contact > 500)) {
      this.setState({
        showContact: false
      })
    }
    if (!this.state.showProjects && projects < 500 && projects > -500) {
      this.setState({
        current: 'Projects',
        showProjects: true
      })
    } else if (this.state.showProjects && (projects < -500 || projects > 500)) {
      this.setState({
        showProjects: false
      })
    }
    if (!this.state.showSkills && skills < 500 && skills > -500) {
      this.setState({
        current: 'Skills',
        showSkills: true
      })
    } else if (this.state.showSkills && (skills < -500 || skills > 500)) {
      this.setState({
        showSkills: false
      })
    }
  }
  toggleVideo() {
    this.setState({
      playVideo: !this.state.playVideo
    })
  }
  render() {
    return (
      <App
        current={this.state.current}
        playVideo={this.state.playVideo}
        scrollTo={scrollTo}
        showAbout={this.state.showAbout}
        showContact={this.state.showContact}
        showHome={this.state.showHome}
        showProjects={this.state.showProjects}
        showSkills={this.state.showSkills}
        toggleVideo={this.toggleVideo}
      />
    )
  }
}

export default AppContainer
