import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import Loader from '../components/Loader'
import animateScroll from '../helpers/animateScroll'

class LayoutContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentView: 'home',
      showAbout: false,
      showConnect: false,
      showHeader: false,
      showHome: true,
      showMedia: false,
      showSoftware: false,
    }
    this.handleScrollEvent = this.handleScrollEvent.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScrollEvent)
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

  render() {
    // if (this.state.loading) {
    //   return <Loader />
    // }
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Ryan Christoffersen</title>
          <link rel="stylesheet" type="text/css" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" />
          <script>
            {`
              (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
              })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
              ga('create', 'UA-97049755-1', 'auto');
              ga('send', 'pageview');
            `}
          </script>
        </Helmet>
        <Layout
          currentView={this.state.currentView}
          animateScroll={animateScroll}
          showAbout={this.state.showAbout}
          showConnect={this.state.showConnect}
          showHeader={this.state.showHeader}
          showHome={this.state.showHome}
          showMedia={this.state.showMedia}
          showSoftware={this.state.showSoftware}
        />
      </>
    )
  }
}

export default LayoutContainer
