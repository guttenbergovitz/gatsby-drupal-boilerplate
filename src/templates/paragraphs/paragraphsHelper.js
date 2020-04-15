import React from "react"
import {TextParagraph} from "./paragraph-text"
import {PunchlineParagraph} from "./paragraph-punchline"
import {ImagesParagraph} from "./paragraph-images"

const componnts = {
  paragraph__text: TextParagraph,
  paragraph__punchline: PunchlineParagraph,
  paragraph__images: ImagesParagraph
}

export const getParagraph = node => {
  if (componnts.hasOwnProperty(node.type)) {
    const ParagraphComponent = componnts[node.type]
    return <ParagraphComponent key={node.id} node={node} />
  }
  return <p key={node.id}>Unknown type {node.type}</p>
}
