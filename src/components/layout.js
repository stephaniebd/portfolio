import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Header from './header'
import Footer from './footer'
import '../styles/styles.scss'
import layoutstyles from './layout.module.scss'


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Container>
        <div className={layoutstyles.subContainer}>
          <div className={layoutstyles.content}>
            <Header siteTitle={data.site.siteMetadata.title} />
            <main>{children}</main>
          </div>
          <Footer/>
        </div>
      </Container>
        
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
