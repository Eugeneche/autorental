import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from "./_ContentSlider.module.scss"
import { Link } from "gatsby"
import seat from "../../images/icons/car-seat.svg"
import snowflake from "../../images/icons/snowflake_1.svg"
import transmission from "../../images/icons/transmission.svg"
import car from "../../images/icons/car.svg"
import factory from "../../images/icons/factory.svg"

const ContentSliderItemCategory = (props) => {

  return (
    <div className={styles.contentSliderItemCategory} style={{width: props.style, margin: "0 0.5% 10px"}}>
        <div className={styles.image}>
          <GatsbyImage image={props.image} alt={props.alt} />
        </div>
        <div className={styles.propertiesBlock}>
          <div className={styles.vehicleTitle}>
            <Link to={props.modifiedSlug}><h3>{props.title}</h3></Link>
          </div>
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

export default ContentSliderItemCategory