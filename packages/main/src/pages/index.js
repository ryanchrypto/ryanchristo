import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import MainLayout from '@ryanchristo/core/layouts/MainLayout'

import Landing from '../components/Landing'

const LandingPage = ({ data }) => (
  <MainLayout data={data}>
    <Landing />
  </MainLayout>
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
