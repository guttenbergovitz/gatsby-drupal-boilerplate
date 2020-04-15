import React from "react"
import { css } from "@emotion/core"

const Header = ({ children }) => {
  return (
    <header
      css={css`
        background-color: lightgray;
        display: flex;
        justify-content: space-between;
        padding: 1em calc((100vw - 72em) / 2);
      `}
    >
      {children}
    </header>
  )
}

export default Header
