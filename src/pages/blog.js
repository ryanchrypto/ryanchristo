import React from "react"
import { Link } from "gatsby"

import Layout from "../containers/Layout"
import SEO from "../components/SEO"

const IndexPage = () => (
  <Layout>
    <SEO title="Index" />
    <h1>ryanchristo</h1>
    <p>This is my index page...</p>
    <Link to="/blog/">Blog</Link>
  </Layout>
)

export default IndexPage
