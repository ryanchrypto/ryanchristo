import React, { PropTypes } from 'react'
import links from '../content/connect'
import styles from './Connect.scss'

const Connect = ({ showConnect }) => (
  <div id="connect" className={styles.container}>
    <h2 className={showConnect ? styles.title : styles.titleHidden}>
      {'connect'}
    </h2>
    <div className={showConnect ? styles.content : styles.contentHidden}>
      <div className={styles.links}>
        {links.map(link => (
          <a
            className={styles.link}
            href={link}
            key={link.link}
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className={link.icon} />
          </a>
        ))}
      </div>
      <a className={styles.email} href="mailto:ryan@ryanchristo.com">
        {'ryan@ryanchristo.com'}
      </a>
    </div>
  </div>
)

Connect.propTypes = {
  showConnect: PropTypes.bool.isRequired,
}

export default Connect
