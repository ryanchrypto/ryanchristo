import React, { PropTypes } from 'react'
import styles from './Skill.scss'

const Skill = ({ image, title }) => (
  <div className={styles.container}>
    <img alt={title} className={styles.image} src={image} />
    <span>{title}</span>
  </div>
)

Skill.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Skill
