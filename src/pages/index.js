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
      <h1>I'm Stepahnie Beauzile-Domond</h1>
      <p>Junior UI/UX & Web designer living in MTL</p>
      <Link to='/work'>Have a look</Link>
      <Link to='/contact'>Conact me</Link>
    </Layout>
  )
}

export default IndexPage
