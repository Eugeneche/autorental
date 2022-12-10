import * as React from "react"
import Layout from "../layout"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "../../style/_style.module.scss"
import * as style from "./_itemPage.module.scss"
import Seo from "../seo"

const ItemPage = ({ data, pageContext } ) => {

  let images = [], names = [], image

  data?.allFile?.nodes.forEach(node => {
    if(`/${node.relativeDirectory}/` === pageContext.originalSlug) {
      images.push(node)
      names.push(node.name)
    }
  })

  if (names.includes('cover')) {
    images.forEach(img => {
      if(img.name === 'cover') image = img
    })
  } else image = images[0]

  return (
    <Layout>
      <Seo title={data?.mdx?.frontmatter.name} />
      <div className={styles.gap}></div>
      <div className={styles.contentContainer}>
        <h1 className={style.itemPageTitle}>{data?.mdx?.frontmatter.name}</h1>
        <div className={style.info}>
          <div className={style.photo}>

            <GatsbyImage 
              image={image.childImageSharp.gatsbyImageData}
              alt={data?.mdx?.frontmatter.name}/>    

          </div>
          <div className={style.characteristics}></div>
        </div>
      </div>     
    </Layout>
  )
}

export default ItemPage

export const query = graphql`
query getPageData($originalSlug: String) {
  allFile(
    filter: {sourceInstanceName: {eq: "vehicles"}, extension: {eq: "jpg"}}
  ) {
    nodes {
      relativePath
      childImageSharp {
        gatsbyImageData
      }
      relativeDirectory
      name
    }
  }
  mdx(fields: {slug: {ne: "/categories/", eq: $originalSlug}}) {
    frontmatter {
      airConditioner
      bodyStyle
      category
      name
      price
      seats
      transmission
      year
      dir
      relPath
    }
    fields {
      slug
    }
  }
}
`