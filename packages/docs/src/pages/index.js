import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import PrimaryLayout from '@ryanchristo/core/layouts/PrimaryLayout'

import Documents from '../components/Documents'

const DocumentsPage = ({ data }) => (
  <PrimaryLayout data={data}>
    <Documents data={data} />
  </PrimaryLayout>
)

DocumentsPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        keywords: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
}

export default DocumentsPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___date] }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          frontmatter {
            type
            slug
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
