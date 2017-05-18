import React, { PropTypes } from 'react'
import Arrow from './Arrow'
import styles from './About.scss'

const About = ({ scrollTo, showAbout }) => (
  <div id="About" className={styles.container}>
    <h2 className={showAbout ? styles.title : styles.hidden}>about |</h2>
    <div className={showAbout ? styles.content : styles.hidden}>
      <div className={styles.text}>
        <p>
          {'Hi. I develop applications and websites. I also capture and share stories with digital media. This site is a combination of the two.'}
        </p>
        <p>
          {'I\'ve been focusing on advancing my skills with HTML5, CSS3, SCSS, ES6, React, Redux, Webpack, PostCSS, Node, Express, and MongoDB. I also have some experience working with jQuery, Ruby, Rails, MySQL, PostreSQL, and PHP.'}
        </p>
        <p>
          {'I\'ve worked on film, videography and photography projects in the past and hope to continue to work on more in the future. I\'m passionate about projects that support or serve a social cause.'}
        </p>
        <p>
          {'Click or scroll down to check out some of the projects I\'ve worked on. If you would like to connect, send me an email.'}
        </p>
      </div>
    </div>
    <div className={showAbout ? styles.downArrowContainer : styles.hidden}>
      <Arrow scrollTo={() => scrollTo('Development')} />
    </div>
  </div>
)

About.propTypes = {
  scrollTo: PropTypes.func.isRequired,
  showAbout: PropTypes.bool.isRequired,
}

export default About
