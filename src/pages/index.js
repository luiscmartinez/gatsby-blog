import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Listing from "../components/listing"

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO
      title="My Blog"
      description="Web Development blog built with the Gatsby static site generator."
      keywords={[
        `gatsby`,
        `application`,
        `react`,
        `luismartinez.dev`,
        `luis martinez web developer`,        
        `web development`,
        `gatsby blog`,
      ]}
      image="./images/gatsby-blog-seo.png"
    />
    <Listing />
  </Layout>
)

export default IndexPage
