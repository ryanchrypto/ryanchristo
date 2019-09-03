import React from 'react'
import PropTypes from 'prop-types'

import styles from './About.module.scss'

const About = ({ showAbout }) => (
  <div id="about" className={styles.container}>
    <h2 className={showAbout ? styles.title : styles.titleHidden}>
      {'about'}
    </h2>
    <div className={styles.content}>
      <div className={styles.summary}>
        <img
          alt="Ryan Christoffersen"
          className={showAbout ? styles.summaryImage : styles.summaryImageHidden}
          src="img/profile.jpg"
        />
        <div className={showAbout ? styles.summaryText : styles.summaryTextHidden}>
          <p>
            <strong>
              {'Software Developer'}
            </strong>
            {'. Currently building the future of work at Colony. Interested in open source projects and decentralization.'}
          </p>
          <p>
            <strong>
              {'Visual Storyteller'}
            </strong>
            {'. Filmed and produced documentaries exploring poverty and microfinance. Interested in human rights and sustainable development.'}
          </p>
        </div>
      </div>
      <div className={showAbout ? styles.skills : styles.skillsHidden}>
        <h3>
          {'Software Skills'}
        </h3>
        <p>
          {'Experience developing applications with React, Redux, SCSS, PostCSS, Webpack, Ruby, Rails, Node, Express, MongoDB, PostgreSQL. Currently exploring Web3, Truffle and Ethereum.'}
        </p>
        <h3>
          {'Media Skills'}
        </h3>
        <p>
          {'Exprience working with Adobe software including Lightroom, Photoshop and Premiere. Experience with photography, videography, cinematography, audio recording and video editing.'}
        </p>
      </div>
    </div>
  </div>
)

About.propTypes = {
  showAbout: PropTypes.bool.isRequired,
}

export default About
