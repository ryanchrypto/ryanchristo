import React, { PropTypes } from 'react'
import styles from './Link.scss'

const Link = ({ icon, link }) => (
  <a
    className={styles.link}
    href={link}
    rel="noopener noreferrer"
    target="_blank"
  >
    <i className={icon} />
  </a>
)

Link.propTypes = {
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default Link
