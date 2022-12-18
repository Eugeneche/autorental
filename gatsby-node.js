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

  const categories = await graphql(`
    query getMenuCategories {
      mdx(fields: {slug: {eq: "/categories/"}}) {
        frontmatter {
          categories
        }
      }
    }
  `)

  //console.log(data) 

  data?.allMdx?.nodes?.forEach(mdxNode => {

    const originalSlug = mdxNode.fields.slug
    const modifiedSlug = mdxNode.fields.slug.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[" "]/g, "-").toLowerCase()

    actions.createPage({
      path: modifiedSlug,
      component: path.resolve('./src/components/ItemPage/ItemPage.js'),
      context: { modifiedSlug, originalSlug }
    })
  })

  categories.data.mdx.frontmatter.categories.forEach(category => {

    const categoryUrl = category.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[" "]/g, "-").toLowerCase()
    const categoryName = category
    actions.createPage({
        path: categoryUrl,
        component: path.resolve('./src/components/CategoryPage/CategoryPage.js'),
        context: { categoryName }
      })
  })
}


