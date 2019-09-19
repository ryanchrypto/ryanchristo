import React from 'react'

import styles from './Documents.module.scss'

const Documents = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <div className={styles.container}>
      <h1>{'Words'}</h1>
      <p>{'The future home of articles and tutorials...'}</p>
      {edges &&
        edges.map(edge => {
          const { date, slug, title } = edge.node.frontmatter
          return (
            <a
              className={styles.item}
              href={process.env.ROOT_URL + slug}
              key={slug}
            >
              <h2>{title}</h2>
              <h3>{date}</h3>
            </a>
          )
        })}
    </div>
  )
}

export default Documents
