import React, { PropTypes } from 'react'
import LinkIcon from './LinkIcon'
import links from '../content/links'
import styles from './Connect.scss'

const Connect = ({ showConnect }) => (
  <div id="Connect" className={styles.container}>
    <h2 className={showConnect ? styles.title : ''}>connect |</h2>
    <div className={showConnect ? styles.content : ''}>
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
  showConnect: PropTypes.bool.isRequired,
}

export default Connect
