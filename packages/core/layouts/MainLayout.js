import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import './MainLayout.scss'

const MainLayout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords },
      ]}
    >
      <link
        rel="stylesheet"
        type="text/css"
        href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
      />
      <script>
        {`
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
          ga('create', 'UA-97049755-1', 'auto');
          ga('send', 'pageview');
        `}
      </script>
    </Helmet>
    {children}
  </div>
)

MainLayout.propTypes = {
  children: PropTypes.shape({}).isRequired,
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

export default MainLayout
