import React from 'react'
import LinkIcon from './LinkIcon'
import links from '../content/links'
import styles from './Contact.scss'

const Contact = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>Contact</h2>
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
)

export default Contact
