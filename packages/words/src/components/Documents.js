import React from 'react'

import styles from './Documents.module.scss'

const siteUrl =
  process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:8000'

const Documents = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <a className={styles.back} href={siteUrl}>
          {'← back to site'}
        </a>
        <h1 className={styles.title}>{'Words'}</h1>
        {edges &&
          edges.map(edge => {
            const { date, slug, title } = edge.node.frontmatter
            return (
              <a
                className={styles.item}
                href={process.env.ROOT_URL + slug}
                key={slug}
              >
                <h2 className={styles.title}>{title}</h2>
                <h3 className={styles.date}>{date}</h3>
              </a>
            )
          })}
      </div>
    </div>
  )
}

export default Documents
