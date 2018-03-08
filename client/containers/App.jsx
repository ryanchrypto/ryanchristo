import React, { Component } from 'react'
import App from '../components/App'
import Loader from '../components/Loader'

class AppContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentView: 'home',
      loadedImages: 0,
      loading: true,
      showAbout: false,
      showConnect: false,
      showHeader: false,
      showHome: false,
      showMedia: false,
      showSoftware: false,
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
  }

  handleScrollEvent() {
    const about = document.getElementById('about').getBoundingClientRect().top
    const connect = document.getElementById('connect').getBoundingClientRect().top
    const home = document.getElementById('home').getBoundingClientRect().top
    const media = document.getElementById('media').getBoundingClientRect().top
    const software = document.getElementById('software').getBoundingClientRect().top
    if (window.scrollY > 500) {
      this.setState({
        showHeader: true,
      })
    } else {
      this.setState({
        showHeader: false,
      })
    }
    if (home > -500) {
      this.setState({
        currentView: 'home',
        showHome: true,
      })
    }
    if (about < 500 && about > -500) {
      this.setState({
        currentView: 'about',
        showAbout: true,
      })
    }
    if (software < 500 && software > -500) {
      this.setState({
        currentView: 'software',
        showSoftware: true,
      })
    }
    if (media < 500 && media > -500) {
      this.setState({
        currentView: 'media',
        showMedia: true,
      })
    }
    if (connect < 500) {
      this.setState({
        currentView: 'connect',
        showConnect: true,
      })
    }
  }

  handleScrollTo(id) {
    this.animateScroll(id)
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

  updateLoading() {
    this.setState({
      loadedImages: this.state.loadedImages + 1,
    })
    if (this.state.loadedImages === 5) {
      this.setState({
        loading: false,
      })
    }
  }

  render() {
    if (this.state.loading) {
      return <Loader />
    }
    return (
      <App
        currentView={this.state.currentView}
        showAbout={this.state.showAbout}
        showConnect={this.state.showConnect}
        showHeader={this.state.showHeader}
        showHome={this.state.showHome}
        showMedia={this.state.showMedia}
        showSoftware={this.state.showSoftware}
        scrollTo={this.handleScrollTo}
      />
    )
  }
}

export default AppContainer
