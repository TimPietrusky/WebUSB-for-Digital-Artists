import React from 'react'
import styled, {css} from 'styled-components'

export const StyledList = styled.ul`
  list-style: none;
  text-align: right;
  font-size: 2em;
  padding-right: .25em;
  margin: .5em 1em 0 0;
  width: 100%;

  > span {
    display: block !important;
  }

  > span[style="--time:0;"] {
  }

  li {
      position: relative;
      text-align: right;
      display: inline-block;
      margin: 0 0 .35em auto;
      padding-bottom: .1em;
      border-bottom: 1px solid var(--theme-primary-dark);

      &:before {
          content: '';
          position: absolute;
          left: -1em;
          top: 0;
      }
  }
`