import styled from 'styled-components'

interface HeaderType {
  children?: React.ReactNode
}
const StyledHeader = styled.header`
  width: 100vw;
  min-height: 5vh;
  background-color: blue;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const NavbarContainer = styled.nav`
  color: white;

  a {
    text-decoration: none;
    color: white;
    margin: 25px;
  }
`

const Header = ({ children }: HeaderType): JSX.Element => {
  return (
    <StyledHeader>
      <NavbarContainer>
        {children}
      </NavbarContainer>
    </StyledHeader>
  )
}

export default Header
