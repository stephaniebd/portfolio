import React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi.</h1>
      <h1>I'm Stephanie Beauzile-Domond</h1>
      <h2>Junior UI/UX & Web designer living in MTL</h2>
      <p><Link to='/work'>Have a look</Link></p>
      <p><Link to='/contact'>Conact me</Link></p>
    </Layout>
  )
}

export default IndexPage
