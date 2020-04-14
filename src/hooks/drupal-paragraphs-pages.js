import { graphql, useStaticQuery } from "gatsby"

const useDrupalParagraphsPages = () => {
  const data = useStaticQuery(graphql`
    query {
      source: allNodeParagraphsPage {
        nodes {
          path {
            alias
          }
          title
          relationships {
            paragraphs: field_paragraphs {
              type: __typename
            }
          }
        }
      }
    }
  `)
  return data.source.nodes.map(node => ({
    slug: node.path.alias,
    title: node.title,
    paragraphs: node.relationships.field__paragraphs,
  }))
}

export default useDrupalParagraphsPages
