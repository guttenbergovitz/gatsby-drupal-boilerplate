exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPages } = actions

  const result = await graphql(`
    query {
      basicPages: allNodePage {
        nodes {
          path {
            alias
          }
        }
      }
      paragraphsPages: allNodeParagraphsPage {
        nodes {
          path {
            alias
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("failed to create node", result.errors)
  }

  result.data.basicPages.nodes.forEach(node => {
    actions.createPage({
      path: node.path.alias,
      component: require.resolve(`./src/templates/drupal-basic-page.js`),
      context: {
        url: node.path.alias,
      },
    })
  })

  result.data.paragraphsPages.nodes.forEach(node => {
    actions.createPage({
      path: node.path.alias,
      component: require.resolve(`./src/templates/drupal-paragraphs-page.js`),
      context: {
        url: node.path.alias,
      },
    })
  })
}
