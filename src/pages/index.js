import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import layoutStyles from '../components/layout.module.scss'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi.</h1>
      <h1>I'm Stephanie Beauzile-Domond</h1>
      <h2>Junior UI/UX & Web designer living in MTL</h2>
      <div className={layoutStyles.link}>
        <p><Link className={layoutStyles.mainLink} to='/work'>Have a look</Link></p>
        <p><Link className={layoutStyles.mainLink} to='/contact'>Conact me</Link></p>
      </div>
    </Layout>
  )
}

export default IndexPage
