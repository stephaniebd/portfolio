import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// import Container from "react-bootstrap/Container"

import headerStyles from './header.module.scss'

const Header = () => {
  return (
    <header className={headerStyles.header}>
        <div className={headerStyles.innerHeader}>
          <div >
            <Link className={headerStyles.logo} to='/'>SDB</Link>
          </div>
          <nav>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/'>Work</Link>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/about'>About</Link>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/contact'>Contact</Link>
          </nav>
        </div>
      </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
