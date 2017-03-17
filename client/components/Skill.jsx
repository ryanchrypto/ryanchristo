import React, { PropTypes } from 'react'
import styles from './Skill.scss'

const Skill = ({ image, title }) => (
  <div className={styles.skill}>
    <img alt={title} className={styles.image} src={image} />
    <p className={styles.text}>{title}</p>
  </div>
)

Skill.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Skill
