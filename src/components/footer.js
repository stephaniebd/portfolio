import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

const Footer = () => {
    return (
    <div>
        © {new Date().getFullYear()}, Created by
        {` `}
        <a href="stephanie.beauzile.d@gmail.com">Stephanie Beauzile-Domond</a>
    </div>
    )
}

export default Footer