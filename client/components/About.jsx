import React, { PropTypes } from 'react'
import styles from './About.scss'

const About = ({ currentView }) => (
  <div id="About" className={styles.container}>
    <h2 className={currentView === 'About' ? styles.title : styles.hidden}>about |</h2>
    <div className={currentView === 'About' ? styles.content : styles.hidden}>
      <div className={styles.text}>
        <p>
          {'Hi. I develop applications and websites. I also like to capture and share stories with digital media. This site shares a combination of the two.'}
        </p>
        <p>
          {'I\'m currently working as a freelance developer and looking for new opportunities. I\'ve been focusing on building applications and websites with HTML5, CSS3, SCSS, ES6, React, Redux, Webpack, PostCSS, Node, Express, and MongoDB. I also have experience working with jQuery, Ruby, Rails, MySQL, PostreSQL, and PHP.'}
        </p>
        <p>
          {'I\'ve worked on film, videography and photography projects in the past and hope to work on more in the future. I\'m passionate about projects related to international development and social justice. I\'m best known for working on a documentary film called Living on One Dollar and a short film called Rosa - These Storms.'}
        </p>
        <p>
          {'Scroll down to check out some of the projects I\'ve worked on. If you would like to connect, shoot me an email.'}
        </p>
      </div>
    </div>
  </div>
)

About.propTypes = {
  currentView: PropTypes.string.isRequired,
}

export default About
