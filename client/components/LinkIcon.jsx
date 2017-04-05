import React, { PropTypes } from 'react'
import styles from './LinkIcon.scss'

const LinkIcon = ({ icon, link }) => (
  <a
    className={styles.link}
    href={link}
    rel="noopener noreferrer"
    target="_blank"
  >
    <i className={icon} />
  </a>
)

LinkIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default LinkIcon
