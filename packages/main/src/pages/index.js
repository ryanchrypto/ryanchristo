import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import PrimaryLayout from '@ryanchristo/core/layouts/PrimaryLayout'

import Landing from '../components/Landing'

const LandingPage = ({ data }) => (
  <PrimaryLayout data={data}>
    <Landing />
  </PrimaryLayout>
)

LandingPage.propTypes = {
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

export default LandingPage

export const query = graphql`
  query indexMetadataQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`
