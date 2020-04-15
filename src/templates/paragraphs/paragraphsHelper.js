import React from "react"
import {TextParagraph} from "./paragraph-text"
import {PunchlineParagraph} from "./paragraph-punchline"
import {ImagesParagraph} from "./paragraph-images"
import { GalleryParagraph } from "./paragraph-gallery"
import { RemoteVideoParagraph } from "./paragraph-remote-video"

const components = {
  paragraph__text: TextParagraph,
  paragraph__punchline: PunchlineParagraph,
  paragraph__images: ImagesParagraph,
  paragraph__gallery: GalleryParagraph,
  paragraph__remote_video: RemoteVideoParagraph
}

export const getParagraph = node => {
  if (components.hasOwnProperty(node.type)) {
    const ParagraphComponent = components[node.type]
    return <ParagraphComponent key={node.id} node={node} />
  }
  return <p key={node.id}>Unknown type {node.type}</p>
}
