import React, { PropTypes } from 'react'
import styles from './Button.scss'

const Button = ({ children, link }) => (
  <a
    className={styles.button}
    href={link}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
)

Button.propTypes = {
  children: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default Button
