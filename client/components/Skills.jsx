import React from 'react'
import Skill from './Skill'
import skills from '../content/skills'
import styles from './Skills.scss'

const Skills = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>Skills</h2>
    <div className={styles.skills}>
      {skills.map(skill => (
        <Skill
          key={skill.title}
          {...skill}
        />
      ))}
    </div>
  </div>
)

export default Skills
