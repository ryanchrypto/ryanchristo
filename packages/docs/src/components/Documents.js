import React from 'react'

import styles from './Documents.module.scss'

const siteUrl =
  process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:8000'

const Documents = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  const articles = edges.filter(
    edge => edge.node.frontmatter.type === 'article',
  )
  const tutorials = edges.filter(
    edge => edge.node.frontmatter.type === 'tutorial',
  )
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <a className={styles.back} href={siteUrl}>
          {'← back to site'}
        </a>
        <h1 className={styles.title}>{'Documents'}</h1>
        {!!articles.length && (
          <div>
            <h2 className={styles.subtitle}>{'Articles'}</h2>
            {articles.map(article => {
              const { date, slug, title } = article.node.frontmatter
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
        )}
        {!!tutorials.length && (
          <div>
            <h2 className={styles.subtitle}>{'Tutorials'}</h2>
            {tutorials.map(tutorial => {
              const { date, slug, title } = tutorial.node.frontmatter
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
        )}
      </div>
    </div>
  )
}

export default Documents
