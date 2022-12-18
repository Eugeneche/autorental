import * as React from "react"
import Layout from "../layout"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from "../../style/_style.module.scss"
import * as style from "./_itemPage.module.scss"
import * as s from "../../components/ContentSlider/_ContentSlider.module.scss"
import Seo from "../seo"
import seat from "../../images/icons/car-seat.svg"
import snowflake from "../../images/icons/snowflake_1.svg"
import transmission from "../../images/icons/transmission.svg"
import car from "../../images/icons/car.svg"
import factory from "../../images/icons/factory.svg"

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
        <div className={s.contentSliderItemCategory}>
          <div className={s.image}>
            <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt={data?.mdx?.frontmatter.name} />
          </div>
          <div className={s.propertiesBlock}>
            <div className={s.vehicleTitle}>
              <h3>Specifikace vozidla {data?.mdx?.frontmatter.name}</h3>
            </div>
            <div className={s.propertyItem}>
              <img className={s.propertyIcon} src={seat} alt="auto seat icon"></img><span>{data?.mdx?.frontmatter.seats}</span>
            </div>
            <div className={s.propertyItem}>
              <img className={s.propertyIcon} src={snowflake} alt="snowflake icon"></img>{data?.mdx?.frontmatter.ac ? `Ano` : `Ne`}            
            </div>   
            <div className={s.propertyItem}>
              <img className={s.propertyIcon} src={transmission} alt="transmission icon"></img><span>{data?.mdx?.frontmatter.transmission}</span>
            </div>    
            <div className={s.propertyItem}>
              <img className={s.propertyIcon} src={car} alt="car icon"></img><span>{data?.mdx?.frontmatter.bodyStyle}</span>
            </div>    
            <div className={s.propertyItem}>
              <img className={s.propertyIcon} src={factory} alt="factory icon"></img>{`Rok ${data?.mdx?.frontmatter.year}`}
            </div>    

          </div>
          <div className={s.price}>
            {`${data?.mdx?.frontmatter.price} Kč/den`}
          </div>
        </div>

        <div className={style.restImagesGallery}>
        {images.map(img => {
          console.log(img)
          if (img.name !== 'cover') {
            return <div key={img.childImageSharp.id} className={style.restImageItem}>
            <GatsbyImage style={{height: "100%"}} image={img.childImageSharp.gatsbyImageData} alt={img.relativeDirectory.replace(/["/"]/g, ", ")} />
          </div>
          }
        })}
        </div>
      </div>     
    </Layout>
  )
}

export default ItemPage

export const query = graphql`
query getPageData($originalSlug: String) {
  allFile(filter: {sourceInstanceName: {eq: "vehicles"}, extension: {eq: "jpg"}}) {
    nodes {
      relativePath
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, height: 400)
        id
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