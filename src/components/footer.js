import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

import footerStyles from './footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <>
            <div className={footerStyles.aStyle}>
                <div>
                    © {new Date().getFullYear()}, Created by
                    {` `}
                    <a href="stephanie.beauzile.d@gmail.com">Stephanie Beauzile-Domond</a>   
                </div>
                <div className={footerStyles.icons}>
                    <FontAwesomeIcon className={footerStyles.icon} icon={faLinkedin}/>
                    <FontAwesomeIcon className={footerStyles.icon} icon={faGithubSquare}/>
                </div>
            </div>
        </>
    )
}

export default Footer