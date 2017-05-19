import React, { PropTypes } from 'react'
import styles from './Link.scss'

const Link = ({ children, link }) => (
  <a
    className={styles.link}
    href={link}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
)

Link.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
}

export default Link
