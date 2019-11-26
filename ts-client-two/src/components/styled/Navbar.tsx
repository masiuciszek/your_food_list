import * as React from 'react'
import styled from 'styled-components';
import { links } from '../../utils/mix';
import {Link} from 'react-router-dom'
interface Props {

}

const StyledNavbar = styled.nav`
padding: 1rem;

  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .title{
    text-transform: capitalize;
    h3{
      font-size: 2rem;
      letter-spacing: .3rem;
      background: ${({theme}) => theme.colors.blackShadow};
      color: ${({theme}) => theme.colors.offWhite};
      padding: .4rem .8rem;
      transform: skewX(3deg);
      box-shadow: ${({theme}) => theme.shadow.blackShadow};
      span {
        color: ${({theme}) => theme.colors.primaryColor};
      }
    }
  }
`;


export const NavList = styled.ul`
  padding: .5rem;
  display: flex;
  li{
    margin: 0 .4rem;
    transition: ${({theme}) => theme.transition.mainTransition};
    &:hover{
      transform: scale(1.06);
    }
    a{
      font-size: 1.2rem;
      text-transform:uppercase;
      color: ${({theme}) => theme.colors.white};
      transition: ${({theme}) => theme.transition.mainTransition};
      &:hover {
        color: ${props => props.theme.colors.primaryColor};
        border-bottom: 1px solid ${props => props.theme.colors.white};
      }
    }
  }
`;

 const Navbar: React.FC<Props> = () => {
    return (
      <StyledNavbar>
        <div className="title">
          <h3>Food <span>for</span> You </h3>
        </div>
      <NavList>
        { links.map(link =>   <li key={link.id}> <Link to={link.path}>{link.text}</Link> </li>  )}
      </NavList>
      </StyledNavbar>
    );
}
export default Navbar