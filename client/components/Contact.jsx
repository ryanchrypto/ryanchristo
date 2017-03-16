import React from 'react'
import Link from './Link'
import links from '../content/links'
import styles from './Contact.scss'

const Contact = () => (
  <div id="contact" className={styles.container}>
    <h2 className={styles.title}>Contact</h2>
    <div className={styles.links}>
      {links.map(link => (
        <Link
          key={link.link}
          {...link}
        />
      ))}
    </div>
  </div>
)

export default Contact
