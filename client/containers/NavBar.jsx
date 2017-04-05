import React, { Component } from 'react'
import NavBar from '../components/NavBar'

class NavBarContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showNavBar: false
    }
    this.handleScrollEvents = this.handleScrollEvents.bind(this)
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScrollEvents)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollEvents)
  }
  handleScrollEvents() {
    if (window.scrollY > 200) {
      this.setState({
        showNavBar: true
      })
    } else {
      this.setState({
        showNavBar: false
      })
    }
  }
  render() {
    const scrollToTop = () => {
      window.scroll(0, 0)
    }
    return (
      <NavBar
        scrollToTop={scrollToTop}
        showNavBar={this.state.showNavBar}
        {...this.props}
      />
    )
  }
}

export default NavBarContainer
