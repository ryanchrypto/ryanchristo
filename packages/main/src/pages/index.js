import React from 'react'
import PropTypes from 'prop-types'

import PrimaryLayout from '@ryanchristo/core/layouts/PrimaryLayout'

import Landing from '../components/Landing'

const IndexPage = ({ data }) => (
  <PrimaryLayout data={data}>
    <Landing />
  </PrimaryLayout>
)

IndexPage.propTypes = {
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

export default IndexPage

// eslint-disable-next-line
export const query = graphql`
  query SiteMetadataQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`
