import React from "react"

import HeroSlider from "../components/heroSlider/heroSlider.en"
import Layout from "../components/layout.en"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Gronic" />
    <HeroSlider />
  </Layout>
)

export default IndexPage
