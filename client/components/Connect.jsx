import React, { PropTypes } from 'react'
import links from '../content/connect'
import styles from './Connect.scss'

const Connect = ({ showConnect }) => (
  <div id="connect" className={styles.container}>
    <div className={showConnect ? styles.content : styles.contentHidden}>
      <h2 className={showConnect ? styles.title : styles.titleHidden}>
        {'connect'}
      </h2>
      <div className={showConnect ? styles.links : styles.linksHidden}>
        {links.map(link => (
          <a
            className={styles.link}
            href={link.link}
            key={link.link}
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className={link.icon} />
          </a>
        ))}
      </div>
      <a className={showConnect ? styles.email : styles.emailHidden} href="mailto:ryan@ryanchristo.com">
        {'ryan@ryanchristo.com'}
      </a>
    </div>
  </div>
)

Connect.propTypes = {
  showConnect: PropTypes.bool.isRequired,
}

export default Connect
