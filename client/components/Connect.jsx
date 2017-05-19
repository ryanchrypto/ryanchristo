import React, { PropTypes } from 'react'
import LinkIcon from './LinkIcon'
import links from '../content/links'
import styles from './Connect.scss'

const Connect = ({ currentView }) => (
  <div id="Connect" className={styles.container}>
    <h2 className={currentView === 'Connect' ? styles.title : ''}>connect |</h2>
    <div className={currentView === 'Connect' ? styles.content : ''}>
      <div className={styles.links}>
        {links.map(link => (
          <LinkIcon
            key={link.link}
            {...link}
          />
        ))}
      </div>
      <a className={styles.email} href="mailto:ryan@ryanchristo.com">
        ryan@ryanchristo.com
      </a>
    </div>
  </div>
)

Connect.propTypes = {
  currentView: PropTypes.string.isRequired,
}

export default Connect
