import * as React from "react"
import { useState, useEffect } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "./_ContentSlider.module.scss"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import seat from "../../images/icons/car-seat.svg"
import snowflake from "../../images/icons/snowflake_1.svg"
import transmission from "../../images/icons/transmission.svg"
import car from "../../images/icons/car.svg"
import factory from "../../images/icons/factory.svg"

const ContentSliderItemMain = (props) => {

  const[imagePath, setImagePath] = useState({})
  const[slug, setSlug] = useState('')

  const data = useStaticQuery(graphql`
  query ItemMainPage {
    allFile(filter: {sourceInstanceName: {eq: "vehicles"}, extension: {eq: "jpg"}}) {
      nodes {
        childImageSharp {
          gatsbyImageData(placeholder: DOMINANT_COLOR, height: 340, width: 640)
        }
        relativeDirectory
        name
      }
    }
    allMdx(filter: {fields: {slug: {ne: "/categories/"}}}) {
      nodes {
        frontmatter {
          relPath
          category
        }
        fields {
          slug
        }
      }
    }
  }
  `)
console.log(data)
console.log(props)
  const allPhotos = data.allFile.nodes
  const allSlugs = data.allMdx.nodes

  useEffect(() => {
    allPhotos.forEach(item => {
      allSlugs.forEach(slugEl => {
        if (`/${item.relativeDirectory}/` === props.slug && 
        item.name === 'cover') {
          setImagePath(getImage(item.childImageSharp.gatsbyImageData))            
          setSlug(props.slug.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[" "]/g, "-").toLowerCase())
        }
      })
    })
  })

  return (
    <div className={styles.contentSliderItem} style={{width: props.style, margin: "0 0.5%"}}>
        
      <GatsbyImage image={imagePath} alt={props.alt} />
      <div className={styles.propertiesBlock}>
        <Link to={slug}><h3>{props.title}</h3></Link>
        <div className={styles.propertyItem}>
          <img className={styles.propertyIcon} src={seat} alt="auto seat icon"></img><span>{props.seats}</span>
        </div>
        <div className={styles.propertyItem}>
          <img className={styles.propertyIcon} src={snowflake} alt="snowflake icon"></img>{props.ac ? `Ano` : `Ne`}            
        </div>   
        <div className={styles.propertyItem}>
          <img className={styles.propertyIcon} src={transmission} alt="transmission icon"></img><span>{props.transmission}</span>
        </div>    
        <div className={styles.propertyItem}>
          <img className={styles.propertyIcon} src={car} alt="car icon"></img><span>{props.bodyStyle}</span>
        </div>    
        <div className={styles.propertyItem}>
          <img className={styles.propertyIcon} src={factory} alt="factory icon"></img>{`Rok ${props.year}`}
        </div>    

      </div>
      <div className={styles.price}>
        {`${props.price} Kč/den`}
      </div>
    </div>
  )
}

export default ContentSliderItemMain