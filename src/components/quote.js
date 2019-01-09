import styled from 'styled-components'
import React from 'react'
import {Quote as DekkQuote} from '@dekk/text'

const StyledQuote = styled.div`
    font-size: 3.5rem;
    --quote-border-color: #ddd;
`

const Quote = props => {
    return (
      <StyledQuote>
        <DekkQuote {...props} />
      </StyledQuote>
    )
}

export default Quote