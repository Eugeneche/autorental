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
          category
        }
        fields {
          slug
        }
      }
    }
  }
  `)

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
    <div className={styles.contentSliderItemMain} style={{width: props.style, margin: "0 0.5%"}}>
      <Link className={styles.linkToVehicle} to={slug}> 
        <GatsbyImage image={imagePath} alt={props.alt} />
      
      <div className={styles.vehicleTitle}>
        <h3>{/* <Link to={slug}> */}{props.title}{/* </Link> */}</h3>
      </div>
      <div className={styles.propertiesBlock}>
        <div className={styles.propertyItem}>
          <img className={styles.propertyIcon} src={seat} alt="auto seat icon"></img><span>{props.seats}</span>
        </div>
        <div className={styles.propertyItem}>
          <img className={styles.propertyIcon} src={snowflake} alt="snowflake icon"></img>{props.ac ? `yes` : `no`}            
        </div>   
        <div className={styles.propertyItem}>
          <img className={styles.propertyIcon} src={transmission} alt="transmission icon"></img><span>{props.transmission}</span>
        </div>    
        <div className={styles.propertyItem}>
          <img className={styles.propertyIcon} src={car} alt="car icon"></img><span>{props.bodyStyle}</span>
        </div>    
        <div className={styles.propertyItem}>
          <img className={styles.propertyIcon} src={factory} alt="factory icon"></img>{`${props.year}`}
        </div>    

      </div>
      <div className={styles.price}>
      {`$${props.price}/day`}
      </div></Link>
    </div>
  )
}

export default ContentSliderItemMain