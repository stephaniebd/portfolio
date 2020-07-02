import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'
import SEO from "../components/seo"
import layoutStyles from '../components/layout.module.scss'

const About = () => {
    return (
        <Layout>
            <SEO title="About" />
            <h1>About</h1>
            <p>Creative Junior Front End Developer who was a Merchandising Manager with several 
                years of experience in retail management, merchandising, training and development
                when discovered a new passion for Front-End, UI/UX and decided to change career
                and start a new one in tech. Love designing, building and managing projects
                from the ground up. Successful involvement in many markets ranging volumes,
                mentalities and environments. Possesses a positive vibe and a strong work ethic.
                Goal-oriented and consistently seeks opportunities for growth and increase technical 
                skills and knowledge. </p>
                <Link className={layoutStyles.mainLink} to=''>Resume</Link>
        </Layout>
    )
}

export default About