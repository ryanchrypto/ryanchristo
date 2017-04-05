import React, { Component } from 'react'
import SlideShow from '../components/SlideShow'

const slides = [
  'slide1',
  'slide2',
  'slide3',
  'slide4',
  'slide5'
]

class SlideShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      direction: 'left',
      slide: 'slide1'
    }
    this.nextSlide = this.nextSlide.bind(this)
    this.previousSlide = this.previousSlide.bind(this)
    this.setSlide = this.setSlide.bind(this)
  }
  setSlide(slide) {
    const previous = slides.findIndex(i => i === this.state.slide)
    const next = slides.findIndex(i => i === slide)
    const direction = previous > next ? 'right' : 'left'
    if (this.state.slide !== slide) {
      this.setState({
        direction,
        slide
      })
    }
  }
  nextSlide() {
    let next = slides.findIndex(slide => slide === this.state.slide) + 1
    next = next === slides.length ? next = 0 : next
    this.setState({
      direction: 'left',
      slide: slides[next]
    })
  }
  previousSlide() {
    let previous = slides.findIndex(slide => slide === this.state.slide) - 1
    previous = previous === -1 ? previous = slides.length - 1 : previous
    this.setState({
      direction: 'right',
      slide: slides[previous]
    })
  }
  render() {
    return (
      <SlideShow
        direction={this.state.direction}
        nextSlide={this.nextSlide}
        previousSlide={this.previousSlide}
        setSlide={this.setSlide}
        slide={this.state.slide}
        slides={slides}
      />
    )
  }
}

export default SlideShowContainer
