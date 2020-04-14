import React from "react"
import { css } from "@emotion/core"

const Header = ({ children }) => {
  return (
    <header
      css={css`
        background-color: lightgray;
        display: flex;
        justify-content: space-between;
        padding: 1em;
      `}
    >
      {children}
    </header>
  )
}

export default Header
