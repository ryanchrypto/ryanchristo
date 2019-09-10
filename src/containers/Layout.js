import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'
import Loader from '../components/Loader'

import background1 from '../../static/img/background-1.jpg'
import background2 from '../../static/img/background-2.jpg'

class LayoutContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentView: 'home',
      loaded: 0,
      loading: true,
      showConnect: false,
      showHeader: false,
      showHome: true,
    }
    this.handleScrollEvent = this.handleScrollEvent.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScrollEvent)
    this.loadImages()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollEvent)
  }

  handleScrollEvent() {
    const about = document.getElementById('about').getBoundingClientRect()
    const connect = document.getElementById('connect').getBoundingClientRect()
    const home = document.getElementById('home').getBoundingClientRect()
    const media = document.getElementById('media').getBoundingClientRect()
    const software = document.getElementById('software').getBoundingClientRect()

    let { currentView, showConnect, showHeader, showHome } = this.state

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
    }
    if (software.top < 800 && software.bottom > 200) {
      currentView = 'software'
    }
    if (media.top < 800 && media.bottom > 200) {
      currentView = 'media'
    }
    if (connect.top < 500) {
      currentView = 'connect'
      showConnect = true
    } else {
      showConnect = false
    }

    const {
      currentView: stateCurrentView,
      showConnect: stateShowConnect,
      showHeader: stateShowHeader,
      showHome: stateShowHome,
    } = this.state

    if (
      currentView !== stateCurrentView ||
      showConnect !== stateShowConnect ||
      showHeader !== stateShowHeader ||
      showHome !== stateShowHome
    ) {
      this.setState({
        currentView,
        showConnect,
        showHeader,
        showHome,
      })
    }
  }

  loadImages() {
    // eslint-disable-next-line no-undef
    const image1 = new Image()
    // eslint-disable-next-line no-undef
    const image2 = new Image()

    image1.src = background1
    image2.src = background2

    let { loaded } = this.state

    const updateLoading = () => {
      loaded += 1
      this.setState({ loaded })
      if (loaded === 2) {
        this.setState({ loading: false })
      }
    }

    image1.onload = () => {
      updateLoading()
    }
    image2.onload = () => {
      updateLoading()
    }
  }

  render() {
    const {
      currentView,
      loading,
      showConnect,
      showHeader,
      showHome,
    } = this.state

    if (loading) return <Loader />

    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Ryan Christoffersen</title>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
          />
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
          currentView={currentView}
          showConnect={showConnect}
          showHeader={showHeader}
          showHome={showHome}
        />
      </>
    )
  }
}

export default LayoutContainer
