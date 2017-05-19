import React, { Component } from 'react'
import App from '../components/App'
import Loader from '../components/Loader'

class AppContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentView: 'Home',
      imagesLoaded: 0,
      isLoading: true,
      isScrolling: false,
      lastScroll: 0,
    }
    this.handleScrollEvent = this.handleScrollEvent.bind(this)
    this.handleScrollTo = this.handleScrollTo.bind(this)
  }

  componentWillMount() {
    window.addEventListener('scroll', this.handleScrollEvent)
  }

  componentDidMount() {
    this.preloadImages()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollEvent)
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
      isScrolling: true,
    })
    setTimeout(() => {
      document.body.style.overflow = 'scroll'
      this.setState({
        isScrolling: false,
        lastScroll: end,
      })
    }, 1400)
  }

  handleScrollEvent() {
    const about = document.getElementById('About').getBoundingClientRect().top
    const connect = document.getElementById('Connect').getBoundingClientRect().top
    const development = document.getElementById('Development').getBoundingClientRect().top
    const digitalMedia = document.getElementById('DigitalMedia').getBoundingClientRect().top
    const home = document.getElementById('Home').getBoundingClientRect().top
    if (!this.state.isScrolling) {
      this.triggerAnimation()
    }
    if (home > -500) {
      this.setState({
        currentView: 'Home',
      })
    }
    if (about < 500 && about > -500) {
      this.setState({
        currentView: 'About',
      })
    }
    if (development < 500 && development > -500) {
      this.setState({
        currentView: 'Development',
      })
    }
    if (digitalMedia < 500 && digitalMedia > -500) {
      this.setState({
        currentView: 'DigitalMedia',
      })
    }
    if (connect < 500) {
      this.setState({
        currentView: 'Connect',
      })
    }
  }

  handleScrollTo(id) {
    if (!this.state.isScrolling) {
      this.animateScroll(id)
    }
  }

  preloadImages() {
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

  triggerAnimation() {
    const currentScroll = window.scrollY
    const currentView = this.state.currentView
    const lastScroll = this.state.lastScroll
    if (currentScroll > lastScroll) {
      switch (currentView) {
        case 'Home':
          this.animateScroll('About', lastScroll)
          break
        case 'About':
          this.animateScroll('Development', lastScroll)
          break
        case 'Development':
          this.animateScroll('DigitalMedia', lastScroll)
          break
        case 'DigitalMedia':
          this.animateScroll('Connect', lastScroll)
          break
        default:
          break
      }
    }
    if (currentScroll < lastScroll) {
      switch (currentView) {
        case 'About':
          this.animateScroll('Home', lastScroll)
          break
        case 'Development':
          this.animateScroll('About', lastScroll)
          break
        case 'DigitalMedia':
          this.animateScroll('Development', lastScroll)
          break
        case 'Connect':
          this.animateScroll('DigitalMedia', lastScroll)
          break
        default:
          break
      }
    }
  }

  updateLoading() {
    this.setState({
      imagesLoaded: this.state.imagesLoaded + 1,
    })
    if (this.state.imagesLoaded === 5) {
      this.setState({
        isLoading: false,
      })
    }
  }

  render() {
    if (this.state.isLoading) {
      return <Loader />
    }
    return (
      <App
        currentView={this.state.currentView}
        scrollTo={this.handleScrollTo}
      />
    )
  }
}

export default AppContainer
