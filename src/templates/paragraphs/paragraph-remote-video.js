import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"

export const RemoteVideoParagraph = ({ node }) => {
  const videoUrl = node.relationships.video.url
  if (videoUrl.includes("vimeo")) {
    return (
      <div css={css`
        position: relative;
        padding-bottom: 56.25%;
        height: 0;
        overflow: hidden;
        max-width: 100%;

        iframe, object, embed {
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
        }
      `}>
        <iframe src={videoUrl} frameborder="0" allowFullScreen />
      </div>
    )
  } else if (videoUrl.includes("youtube")) {
    return <p>This is YouTube</p>
  } else {
    return <p>Unknown video source... cannot proceed...</p>
  }
  // return (
  //   <pre>{JSON.stringify(node, null, 2)}</pre>
  // )
}

export const fragment = graphql`
  fragment ParagraphRemoteVideo on paragraph__remote_video {
    id
    __typename
    relationships {
      video: field_remote_video {
        url: field_media_oembed_video
      }
    }
  }
`
