import React, { Component } from 'react'
import App from '../components/App'
import Loader from '../components/Loader'
import animateScroll from '../helpers/animateScroll'

class AppContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentView: 'home',
      imagesLoaded: 0,
      imagesLoading: true,
      showAbout: false,
      showConnect: false,
      showHeader: false,
      showHome: true,
      showMedia: false,
      showSoftware: false,
    }
    this.handleScrollEvent = this.handleScrollEvent.bind(this)
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

  handleScrollEvent() {

    // set element location
    const about = document.getElementById('about').getBoundingClientRect()
    const connect = document.getElementById('connect').getBoundingClientRect()
    const home = document.getElementById('home').getBoundingClientRect()
    const media = document.getElementById('media').getBoundingClientRect()
    const software = document.getElementById('software').getBoundingClientRect()

    // set intial view and show
    let currentView = this.state.currentView
    let showAbout = this.state.showAbout
    let showConnect = this.state.showConnect
    let showHeader = this.state.showHeader
    let showHome = this.state.showHome
    let showMedia = this.state.showMedia
    let showSoftware = this.state.showSoftware

    // determine view and show
    if (window.scrollY > 500) {
      showHeader = true
    } else {
      showHeader = false
    }
    if (home.top > -500) {
      currentView = 'home'
      showHome = true
    } else {
      showHome = false
    }
    if (about.top < 800 && about.bottom > 200) {
      currentView = 'about'
      showAbout = true
    } else {
      showAbout = false
    }
    if (software.top < 800 && software.bottom > 200) {
      currentView = 'software'
      showSoftware = true
    } else {
      showSoftware = false
    }
    if (media.top < 800 && media.bottom > 200) {
      currentView = 'media'
      showMedia = true
    } else {
      showMedia = false
    }
    if (connect.top < 500) {
      currentView = 'connect'
      showConnect = true
    } else {
      showConnect = false
    }

    // update state if view or show changed
    if (
      currentView !== this.state.currentView ||
      showAbout !== this.state.showAbout ||
      showConnect !== this.state.showConnect ||
      showHeader !== this.state.showHeader ||
      showHome !== this.state.showHome ||
      showMedia !== this.state.showMedia ||
      showSoftware !== this.state.showSoftware
    ) {
      this.setState({
        currentView,
        showAbout,
        showConnect,
        showHeader,
        showHome,
        showMedia,
        showSoftware,
      })
    }

  }

  preloadImages() {

    // create images
    const background1 = new Image()
    const background2 = new Image()

    // append source to images
    background1.src = '/img/background-1.jpg'
    background2.src = '/img/background-2.jpg'

    // update loading state
    const updateLoading = () => {
      // update loaded images
      this.setState({
        imagesLoaded: this.state.imagesLoaded + 1,
      })
      // set loading to false if all images have loaded
      if (this.state.imagesLoaded === 2) {
        this.setState({
          imagesLoading: false,
        })
      }
    }

    // listen to loading events
    background1.onload = () => {
      updateLoading()
    }
    background2.onload = () => {
      updateLoading()
    }

  }

  render() {
    if (this.state.imagesLoading) {
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
        animateScroll={animateScroll}
      />
    )
  }
}

export default AppContainer
