import React from 'react'
import styled, {css} from 'styled-components'
import MaskedImage from '@dekk/image'

export const smallSquare = css`
  --width: 300px;
  --height: 300px;
`

export const topRight = css`
  --background-position: top right;
`

export const topCenter = css`
  --background-position: top center;
`

export const zoom2 = css`
  --background-size: 200% auto;
`
export const SquareImage = styled(MaskedImage)`
  ${smallSquare};
`

export const ZoomImage = styled(MaskedImage)`
  ${zoom2};
  ${topRight};  
`

export const LargeImage = styled.img`
  height: 90vh;
`

export const SmallImage = styled.img`
  height: 40vh;
`

export const SmallImageRound = styled(SmallImage)`
  border-radius: 50%;
  border: .5em solid var(--theme-primary);
`