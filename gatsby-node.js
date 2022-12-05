const { createFilePath } = require('gatsby-source-filesystem')
const path = require("path")

exports.onCreateNode = ({ node, getNode, actions: { createNodeField } }) => {
  if (node.internal.type === 'Mdx') {
    createNodeField({
      node,
      name: 'slug',
      value: createFilePath({ node, getNode })
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
 
  const { data } = await graphql(`
  query getVehicleInfo {
    allMdx(filter: {fields: {slug: {ne: "/categories/"}}}) {
      nodes {
        id
        frontmatter {
          relPath
          price
          name
          airConditioner
          bodyStyle
          category
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
        relativePath
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
  `)

/*   const categories = await graphql(`
  query getCategories {
    mdx(fields: {slug: {eq: "categories"}}) {
      frontmatter {
        categories
      }
    }
  }
  `) */

  //console.log(data) 

  data?.allMdx?.nodes?.forEach(mdxNode => {

    /* data?.allFile?.nodes?.forEach(fileNode => { */
      //const categoryUrl = mdxNode.frontmatter.category.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[" "]/g, "-").toLowerCase()
      //const endUrl = mdxNode.slug.toLowerCase().split('/')[mdxNode.slug.toLowerCase().split('/').length - 1]
      const originalSlug = mdxNode.fields.slug
      const modifiedSlug = mdxNode.fields.slug.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[" "]/g, "-").toLowerCase()

/*       if(fileNode.relativePath === mdxNode.frontmatter.relPath) {
        relPath = fileNode.relativePath
        imageData = fileNode.childImageSharp.gatsbyImageData
      } */

      actions.createPage({
        path: modifiedSlug,
        component: path.resolve('./src/components/ItemPage/ItemPage.js'),
        context: { modifiedSlug, originalSlug }
      })
    /* }) */
  })

  
}


