/* import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

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
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot; Built with
          {` `}
        </footer>
      </div>
    </>
  )
}

export default Layout
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import "./layout.css"
import MainMenu from "./MainMenu/MainMenu"
import MobileMenu from "./MainMenu/MobileMenu"
import Footer from "./Footer/Footer"
import * as styles from "../style/_style.module.scss"

const Layout = ({ children }) => {

  const [width, setWidth] = useState('')

  useEffect(() => {

    setWidth(window.innerWidth)
    window.addEventListener('resize', () => setWidth(window.innerWidth))
    window.removeEventListener('resize', () => setWidth(window.innerWidth))
    return () => { 
      setWidth('')}
  }, [])
  
  return (
    <div className={styles.appWrapper}>
      {width > 1000 ? <MainMenu /> : <MobileMenu />}    
        <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout