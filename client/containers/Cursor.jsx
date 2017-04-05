/* global requestAnimationFrame */

import React, { Component } from 'react'
import Cursor from '../components/Cursor'

class CursorContainer extends Component {
  componentDidMount() {
    const trail = []
    const mouse = {
      x: 0,
      y: 0
    }
    function Trail() {
      this.x = 0
      this.y = 0
      this.node = (function() {
        const node = document.createElement('div')
        document.getElementById('cursor').appendChild(node)
        return node
      }())
    }
    Trail.prototype.draw = function() {
      this.node.style.left = `${this.x}px`
      this.node.style.top = `${this.y}px`
    }
    for (let i = 0; i < 50; i += 1) {
      trail.push(new Trail())
    }
    function draw() {
      let x = mouse.x
      let y = mouse.y
      trail.forEach((instance, index, trail) => {
        const nextInstance = trail[index + 1] || trail[0]
        instance.x = x
        instance.y = y
        instance.draw()
        x += (nextInstance.x - instance.x) * 0.6
        y += (nextInstance.y - instance.y) * 0.6
      })
    }
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.pageX
      mouse.y = e.pageY
    })
    function animate() {
      draw()
      requestAnimationFrame(animate)
    }
    animate()
  }
  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMovement)
    window.removeEventListener('scroll', this.handleScroll)
  }
  render() {
    return (
      <Cursor />
    )
  }
}

export default CursorContainer
