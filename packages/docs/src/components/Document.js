import React from 'react'

import styles from './Document.module.scss'

const indexUrl = process.env.NODE_ENV === 'production' ? '/docs' : '/'

const Document = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <a className={styles.back} href={indexUrl}>
          {'← back to index'}
        </a>
        <h1 className={styles.title}>{frontmatter.title}</h1>
        <h2 className={styles.date}>{frontmatter.date}</h2>
        <div
          className={styles.body}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export default Document
