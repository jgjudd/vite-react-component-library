import styled from 'styled-components'

interface CardTypes {
  children?: React.ReactElement
}

const StyledCard = styled.div`
    background-color: lightgrey;
    border-radius: 5px; 
`

const Card = ({ children }: CardTypes): JSX.Element => {
  return (
    <StyledCard>{children}</StyledCard>
  )
}

export default Card
