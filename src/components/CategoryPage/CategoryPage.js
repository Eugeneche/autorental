import * as React from "react"
import Layout from "../layout"
import { graphql, useStaticQuery } from "gatsby"
import * as commonStyles from "../../style/_style.module.scss"
import * as catsStyle from "./_categoryPage.module.scss"
import Seo from "../seo"
import ContentSliderItemCategory from "../ContentSlider/ContentSliderItemCategory"

const CategoryPage = (data) => {

  const query = useStaticQuery(graphql`
  query getCategory {
    allMdx(filter: {fields: {slug: {ne: "/categories/"}}}) {
      nodes {
        frontmatter {
          airConditioner
          bodyStyle
          category
          dir
          name
          price
          relPath
          seats
          transmission
          year
        }
        fields {
          slug
        }
      }
    }
    allFile(filter: {sourceInstanceName: {eq: "vehicles"}, extension: {eq: "jpg"}}) {
      nodes {
        childImageSharp {
          gatsbyImageData(placeholder: DOMINANT_COLOR, height: 480, width: 640)
          id
        }
        relativeDirectory
        name
      }
    }
  }
  `)
//console.log(data)
  const currentCategory = data.pageContext.categoryName
  const vehiclesOfCurrentCategory = []
  let allData = {}
  //const vehiclesOfCurrentCategory = []
  //console.log(currentCategory)
  query.allMdx.nodes.map(nodeMdx => {
       
    query.allFile.nodes.map(nodeImg => {
      
        if(nodeMdx.frontmatter.category === currentCategory &&
          `/${nodeImg.relativeDirectory}/` === nodeMdx.fields.slug &&
          nodeImg.name === 'cover') {
            console.log(nodeImg)
        allData = {...nodeMdx, ...nodeImg}
        vehiclesOfCurrentCategory.push(allData)
      }
    })
    
  })
  //console.log(vehiclesOfCurrentCategory)
  return (
    <Layout>
      <Seo title="Category" />
      <div className={commonStyles.contentContainer}>
        <h1 className={catsStyle.itemPageTitle}>{data.pageContext.categoryName}</h1>
        {vehiclesOfCurrentCategory.map(vehicle => {

          return <ContentSliderItemCategory
            key={vehicle.childImageSharp.id}
            title={vehicle.frontmatter.name}
            bodyStyle={vehicle.frontmatter.bodyStyle}
            seats={vehicle.frontmatter.seats}
            year={vehicle.frontmatter.year}
            transmission={vehicle.frontmatter.transmission}
            ac={vehicle.frontmatter.airConditioner}
            image={vehicle.childImageSharp.gatsbyImageData}
            alt={vehicle.frontmatter.name}
            price={vehicle.frontmatter.price}
            /* style={`${100/photosQty - 1}%`} */
          />
        })}
      </div>
    </Layout>
  )
}

export default CategoryPage

