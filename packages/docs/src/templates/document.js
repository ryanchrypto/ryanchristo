import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import MainLayout from '@ryanchristo/core/layouts/MainLayout'

import Document from '../components/Document'

const DocumentPage = ({ data }) => (
  <MainLayout data={data}>
    <Document data={data} />
  </MainLayout>
)

DocumentPage.propTypes = {
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

export default DocumentPage

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
