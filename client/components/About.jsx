import React, { PropTypes } from 'react'
import styles from './About.scss'

const About = ({ showAbout }) => (
  <div id="About" className={styles.container}>
    <div className={styles.content}>
      <h2 className={showAbout ? styles.title : styles.hidden}>about |</h2>
      <div className={styles.intro}>
        <img className={showAbout ? styles.profile : styles.profileHidden} alt="Ryan Christoffersen" src="/img/profile_2016.jpg" />
        <div className={showAbout ? styles.text : styles.hidden}>
          <p>
            <strong>{'Software Developer'}</strong>
            {'. Currently developing applications on the Ethereum platform. Interested in open source projects and decentralized technology.'}
          </p>
          <p>
            <strong>{'Media Producer'}</strong>
            {'. Created and produced documentaries on poverty alleviation and microfinance. Interested in exploring uses of blockchain technology for social justice.'}
          </p>
          <p>
            <strong>{'Critical Thinker'}</strong>
            {'. Studied classical languages and literature and critical and cultural theory. Interested in decentralized governance and self-sovereignty.'}
          </p>
        </div>
      </div>
    </div>
  </div>
)

About.propTypes = {
  showAbout: PropTypes.bool.isRequired,
}

export default About
