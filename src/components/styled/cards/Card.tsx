import React from 'react'
import styled from 'styled-components'

interface CardTypes {
  children?: React.ReactElement | string
  onClick?: (event: React.MouseEvent<HTMLInputElement> | JSX.Element) => void
}

const StyledCard = styled.div`
    background-color: lightgrey;
    border-radius: 5px;
    margin: 5px;
    padding: 5px;
    height: 100px;
    width: 100px;
`

const Card = ({ children }: CardTypes): JSX.Element => {
  return (
    <StyledCard>{children}</StyledCard>
  )
}

export default Card
