import React, { PropTypes } from 'react'
import styles from './SlideShow.scss'

const SlideShow = ({ direction, nextSlide, previousSlide, setSlide, slide, slides }) => (
  <div className={styles.container}>
    <div className={styles.slideshow}>
      <div className={styles.arrow} onClick={previousSlide}>
        {'<'}
      </div>
      {slide === 'slide1' &&
        <div className={direction === 'left' ? styles.slideLeft : styles.slideRight}>
          slide1
        </div>
      }
      {slide === 'slide2' &&
        <div className={direction === 'left' ? styles.slideLeft : styles.slideRight}>
          slide2
        </div>
      }
      {slide === 'slide3' &&
        <div className={direction === 'left' ? styles.slideLeft : styles.slideRight}>
          slide3
        </div>
      }
      {slide === 'slide4' &&
        <div className={direction === 'left' ? styles.slideLeft : styles.slideRight}>
          slide4
        </div>
      }
      {slide === 'slide5' &&
        <div className={direction === 'left' ? styles.slideLeft : styles.slideRight}>
          slide5
        </div>
      }
      {slide === 'slide6' &&
        <div className={direction === 'left' ? styles.slideLeft : styles.slideRight}>
          slide6
        </div>
      }
      <div className={styles.arrow} onClick={nextSlide}>
        {'>'}
      </div>
    </div>
    <div className={styles.index}>
      {slides.map(slide => (
        <span key={slide} className={styles.indexItem} onClick={() => setSlide(slide)}>
          {slide}
        </span>
      ))}
    </div>
  </div>
)

SlideShow.propTypes = {
  direction: PropTypes.string.isRequired,
  nextSlide: PropTypes.func.isRequired,
  previousSlide: PropTypes.func.isRequired,
  setSlide: PropTypes.func.isRequired,
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
  slide: PropTypes.string.isRequired
}

export default SlideShow
