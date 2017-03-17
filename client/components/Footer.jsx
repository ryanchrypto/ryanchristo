import React from 'react'
import Link from './Link'
import links from '../content/links'
import styles from './Footer.scss'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.links}>
      {links.map(link => (
        <Link
          key={link.link}
          {...link}
        />
      ))}
    </div>
    <p className={styles.copyright}>
      <i className="fa fa-copyright" /> 2017 ryanchristo
    </p>
  </footer>
)

export default Footer
