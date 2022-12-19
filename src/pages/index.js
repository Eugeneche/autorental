import * as React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import * as styles from "../style/_style.module.scss"
import HeaderSlider from "../components/HeaderSlider/HeaderSlider"
import ContentSlider from "../components/ContentSlider/ContentSlider"


const IndexPage = () => {

  let data = useStaticQuery(graphql`
  query getdata {
    file(sourceInstanceName: {eq: "categories"}, extension: {eq: "mdx"}) {
      childMdx {
        frontmatter {
          categories
        }
      }
    }
    allFile(filter: {sourceInstanceName: {eq: "vehicles"}, extension: {eq: "jpg"}}) {
      nodes {
        relativeDirectory
        childrenImageSharp {
          gatsbyImageData
        }
      }
    }
    allMdx(
      filter: {fields: {slug: {ne: "/categories/"}}}
      sort: {frontmatter: {date: ASC}}
    ) {
      nodes {
        frontmatter {
          airConditioner
          bodyStyle
          category
          name
          price
          seats
          transmission
          year
          date(formatString: "MMMM DD, YYYY")
        }
        id
        fields {
          slug
        }
      }
    }
  }
`)
  
  let categories = data.file.childMdx.frontmatter.categories

  return (
    <Layout>
      <HeaderSlider />
      <div className={styles.contentContainer}>
        <h1 className={styles.mainPageTitle}>půjčovna aut pravě pro vás</h1>
        {categories.map(category => {
          const imageData = []
          data.allMdx.nodes.map(node => {

            return node.frontmatter.category === category && imageData.push(node)
          })

          return (
            <section key={category}>
              <h2 className={styles.mainPageTitle}>{category}</h2><Link className={styles.linkToCategory} to={category.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[" "]/g, "-").toLowerCase()}>&nbsp;&#10095;&#10095;</Link>
              <ContentSlider imageData={imageData}/>
            </section>
          )
        })} 

      </div>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
