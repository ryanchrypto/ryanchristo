import React, { Component } from 'react'
import App from '../components/App'
import Loader from '../components/Loader'

class AppContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentSection: 'Home',
      loaded: 0,
      loading: true,
      lastScrollY: 0,
      positionY: 0,
      showAbout: false,
      showConnect: false,
      showDevelopment: false,
      showDigitalMedia: false,
      showHome: true,
      showSkills: false,
    }
    this.animateScroll = this.animateScroll.bind(this)
    this.handleScrollEvent = this.handleScrollEvent.bind(this)
    this.handleScrollTo = this.handleScrollTo.bind(this)
  }

  componentWillMount() {
    window.addEventListener('scroll', this.handleScrollEvent)
  }

  componentDidMount() {

    const background1 = new Image()
    const background2 = new Image()
    const background3 = new Image()
    const background4 = new Image()
    const background5 = new Image()

    background1.src = '/img/placeholder-1.jpeg'
    background2.src = '/img/placeholder-2.jpeg'
    background3.src = '/img/placeholder-3.jpeg'
    background4.src = '/img/placeholder-4.jpeg'
    background5.src = '/img/placeholder-5.jpeg'

    background1.onload = () => {
      this.updateLoading()
    }
    background2.onload = () => {
      this.updateLoading()
    }
    background3.onload = () => {
      this.updateLoading()
    }
    background4.onload = () => {
      this.updateLoading()
    }
    background5.onload = () => {
      this.updateLoading()
    }

  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollEvent)
  }

  updateLoading() {
    this.setState({
      loaded: this.state.loaded + 1,
    })
    if (this.state.loaded === 5) {
      this.setState({
        loading: false,
      })
    }
  }

  handleScrollEvent() {

    const about = document.getElementById('About').getBoundingClientRect().top
    const connect = document.getElementById('Connect').getBoundingClientRect().top
    const development = document.getElementById('Development').getBoundingClientRect().top
    const digitalMedia = document.getElementById('DigitalMedia').getBoundingClientRect().top
    const home = document.getElementById('Home').getBoundingClientRect().top

    if (!this.state.scrolling) {
      this.triggerAnimation()
    }

    setTimeout(function() {
      if (!this.state.showHome && about > 500 && home > -500) {
        this.setState({
          currentSection: 'Home',
          showHome: true
        })
      } else if (this.state.showHome && home < -500) {
        this.setState({
          showHome: false
        })
      }
      if (!this.state.showAbout && about < 500 && about > -500) {
        this.setState({
          currentSection: 'About',
          showAbout: true
        })
      } else if (this.state.showAbout && (about < -500 || about > 500)) {
        this.setState({
          showAbout: false
        })
      }
      if (!this.state.showConnect && connect < 500 && connect > -500) {
        this.setState({
          currentSection: 'Connect',
          showConnect: true
        })
      } else if (this.state.showConnect && (connect < -500 || connect > 500)) {
        this.setState({
          showConnect: false
        })
      }
      if (!this.state.showDevelopment && development < 500 && development > -500) {
        this.setState({
          currentSection: 'Development',
          showDevelopment: true
        })
      } else if (this.state.showDevelopment && (development < -500 || development > 500)) {
        this.setState({
          showDevelopment: false
        })
      }
      if (!this.state.showDigitalMedia && digitalMedia < 500 && digitalMedia > -500) {
        this.setState({
          currentSection: 'DigitalMedia',
          showDigitalMedia: true
        })
      } else if (this.state.showDigitalMedia && (digitalMedia < -500 || digitalMedia > 500)) {
        this.setState({
          showDigitalMedia: false
        })
      }
    }.bind(this), 0)

  }

  triggerAnimation() {

    const currentScrollY = window.scrollY
    const currentSection = this.state.currentSection
    const lastScrollY = this.state.lastScrollY

    if (currentScrollY > lastScrollY) {
      switch (currentSection) {
        case 'Home':
          this.animateScroll('About', lastScrollY)
          break
        case 'About':
          this.animateScroll('Development', lastScrollY)
          break
        case 'Development':
          this.animateScroll('DigitalMedia', lastScrollY)
          break
        case 'DigitalMedia':
          this.animateScroll('Connect', lastScrollY)
          break
        default:
          break
      }
    }

    if (currentScrollY < lastScrollY) {
      switch (currentSection) {
        case 'About':
          this.animateScroll('Home', lastScrollY)
          break
        case 'Development':
          this.animateScroll('About', lastScrollY)
          break
        case 'DigitalMedia':
          this.animateScroll('Development', lastScrollY)
          break
        case 'Connect':
          this.animateScroll('DigitalMedia', lastScrollY)
          break
        default:
          break
      }
    }

  }

  animateScroll(id, startPosition) {
    const start = startPosition || window.pageYOffset
    const end = document.getElementById(id).offsetTop
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
    const animate = () => {
      currentTime += increment
      const val = Math.easeInOutQuad(currentTime, start, distance, duration)
      window.scroll(0, val)
      if (currentTime < duration) {
        setTimeout(animate, increment)
      }
    }
    animate()
    document.body.style.overflow = 'hidden'
    this.setState({
      scrolling: true,
    })
    setTimeout(function() {
      document.body.style.overflow = 'scroll'
      this.setState({
        lastScrollY: end,
        scrolling: false,
      })
    }.bind(this), 1500)
  }

  handleScrollTo(id) {
    if (!this.state.scrolling) {
      this.animateScroll(id)
    }
  }

  render() {
    if (this.state.loading) {
      return <Loader />
    }
    return (
      <App
        current={this.state.currentSection}
        scrollTo={this.handleScrollTo}
        showAbout={this.state.showAbout}
        showConnect={this.state.showConnect}
        showDevelopment={this.state.showDevelopment}
        showDigitalMedia={this.state.showDigitalMedia}
        showHome={this.state.showHome}
        showSkills={this.state.showSkills}
      />
    )
  }
}

export default AppContainer
