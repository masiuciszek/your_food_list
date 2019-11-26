import * as React from 'react'
import styled from 'styled-components';
import socialIcons, { links } from '../../utils/mix';
import {Link} from 'react-router-dom';
import { NavList } from './Navbar';

interface Props {

}

const StyledFooter = styled.footer`
  padding: 1rem .4rem;
  background: ${({theme}) => theme.colors.black};
  color: ${({theme}) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-self:center;
  justify-content: center;

`;


const FooterListLinks = styled(NavList)`
  padding: .4rem;

  /* TODO:delete */
  border: 2px solid white;
  justify-content: center;
  li{

    a{

    }
  }
`;
const FooterListIcons = styled(NavList)`
  padding: .4rem;
  display: flex;
  /* TODO:delete */
  border: 2px solid red;
  justify-content: center;
  margin: .5rem 0;
  li{
    &:hover{

    }
    a{
      &:hover{
        border: none;
      }
    }
  }
`;

 const Footer: React.FC<Props> = () => {
    return (
      <StyledFooter>
        <FooterListLinks>
              {links.map(link =>  <li> <Link href={link.id} to={link.path} >  {link.text} </Link> </li> )}
              </FooterListLinks>

              <FooterListIcons>
              {socialIcons.map(icon =>  <li key={icon.id}>  <a href={icon.url}>{icon.icon}</a>  </li> )}
        </FooterListIcons>
      </StyledFooter>
    );
}
export default Footer