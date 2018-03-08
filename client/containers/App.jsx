import React, { Component } from 'react'
import App from '../components/App'
import Loader from '../components/Loader'
import animateScroll from '../helpers/animateScroll'

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
    const about = document.getElementById('about').getBoundingClientRect().top
    const connect = document.getElementById('connect').getBoundingClientRect().top
    const home = document.getElementById('home').getBoundingClientRect().top
    const media = document.getElementById('media').getBoundingClientRect().top
    const software = document.getElementById('software').getBoundingClientRect().top

    // show and hide header
    if (window.scrollY > 500) {
      this.setState({
        showHeader: true,
      })
    } else {
      this.setState({
        showHeader: false,
      })
    }

    // set current view and show element section elements
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
        loadedImages: this.state.loadedImages + 1,
      })
      // set loading to false if all images have loaded
      if (this.state.loadedImages === 2) {
        this.setState({
          loading: false,
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
        animateScroll={animateScroll}
      />
    )
  }
}

export default AppContainer
