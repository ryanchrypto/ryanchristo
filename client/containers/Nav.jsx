import React, { Component } from 'react'
import Nav from '../components/Nav'

class NavContainer extends Component {
  render() {
    const scrollTo = (id) => {
      document.querySelector(id).scrollIntoView()
      const offset = (element) => {
        const rect = element.getBoundingClientRect()
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
      }
      const div = document.querySelector(id)
      const divOffset = offset(div)
      console.log(divOffset.left, divOffset.top)
    }
    return <Nav scrollTo={scrollTo} />
  }
}

export default NavContainer
