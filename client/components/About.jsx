import React, { PropTypes } from 'react'
import styles from './About.scss'

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
          src="/img/profile.jpg"
        />
        <div className={showAbout ? styles.summaryText : styles.summaryTextHidden}>
          <p>
            <strong>
              {'Software Developer'}
            </strong>
            {'. Currently developing applications on the Ethereum platform. Interested in open source projects and decentralized technology.'}
          </p>
          <p>
            <strong>
              {'Media Creator'}
            </strong>
            {'. Filmed and produced documentaries exploring poverty and microfinance. Interested in use cases of decentralized technology for social justice.'}
          </p>
          <p>
            <strong>
              {'Critical Thinker'}
            </strong>
            {'. Studied classics and critical and cultural theory as an undergraduate. Interested in decentralized governance, globalization and self-sovereignty.'}
          </p>
        </div>
      </div>
      <div className={showAbout ? styles.skills : styles.skillsHidden}>
        <h3>
          {'Software Skills'}
        </h3>
        <p>
          {'Working on applications connected to the Ethereum blockchain using React, Redux, SCSS, PostCSS, Webpack, Web3, Truffle. Experience with Ruby, Rails, Node, Express, MongoDB, PostgreSQL.'}
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
