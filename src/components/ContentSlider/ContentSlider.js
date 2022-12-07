import React, { useState, useEffect } from "react"

import ContentSliderItemMain from "./ContentSliderItemMain"
import * as styles from "./_ContentSlider.module.scss"

const ContentSlider = (props) => {

  const [width, setWidth] = useState('')
  let photosQty
  if(width > 1000) {
    photosQty = 3
  } else if(width <= 1000 && width > 500) {
    photosQty = 2
  } else if(width <=  500) {
    photosQty = 1
  }

  const [slider, setSlider] = useState([])

  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener('resize', () => setWidth(window.innerWidth))
    window.removeEventListener('resize', () => setWidth())
    return () => { 
      setWidth(null)}
  }, [])
 
  useEffect(() => {
    setSlider(props.imageData.slice(-photosQty))
  }, [photosQty, props.imageData])

  return (
    <div className={styles.contentSlider}>
      
        {slider.map(photo => {
            return <ContentSliderItemMain
                    key={photo.childMdx.id} 
                    style={`${100/photosQty - 1}%`} 
                    title={photo.childMdx.frontmatter.name}
                    seats={photo.childMdx.frontmatter.seats}
                    price={photo.childMdx.frontmatter.price}
                    transmission={photo.childMdx.frontmatter.transmission}
                    bodyStyle={photo.childMdx.frontmatter.bodyStyle}
                    year={photo.childMdx.frontmatter.year}
                    ac={photo.childMdx.frontmatter.airConditioner}
                    imagePath={photo.childMdx.frontmatter.relPath} 
                    alt={photo.childMdx.frontmatter.name} 
                    />
          }
        )
      } 
    </div>
  )
}

export default ContentSlider