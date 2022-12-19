/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet, HelmetProvider } from "react-helmet-async"
import og from "../images/social.jpg"

function Seo({ description, title, children, ogImageDefault }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <>
      <HelmetProvider>
        <Helmet prioritizeSeoTags>
          <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
          <meta name="description" content={metaDescription} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={metaDescription} />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={metaDescription} />
          <meta property="og:image" content={og} />
        </Helmet>
      </HelmetProvider>
      {children}
    </>
  )
}

export default Seo
