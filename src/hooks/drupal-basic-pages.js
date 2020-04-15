import { graphql, useStaticQuery } from "gatsby"

const useDrupalBasicPages = () => {
  const data = useStaticQuery(graphql`
    query {
      source: allNodePage {
        nodes {
          path {
            alias
          }
          title
          body {
            processed
          }
        }
      }
    }
  `)
  return data.source.nodes.map(node => ({
    slug: node.path.alias,
    title: node.title,
    body: node.body.processed,
  }))
}

export default useDrupalBasicPages
