import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import socialIcons, { links } from '../../utils/mix';
import { NavList } from './Navbar';

interface Props {

}

const StyledFooter = styled.footer`
  padding: 1rem .4rem;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-self:center;
  justify-content: center;

`;


const FooterListLinks = styled(NavList)`
  padding: .4rem;
  justify-content: flex-start;
  li{
    margin: 0 .7rem;
    a{
      &:hover{
        border:none;
      }
    }
  }
`;
const FooterListIcons = styled(NavList)`
  padding: .4rem;
  display: flex;
  justify-content: flex-start;
  margin: .5rem 0;
  li{
    margin: 0 .7rem;
    a{

      &:hover{
        border: none;
      }
    }
  }
`;

const Footer: React.FC<Props> = () => (
  <StyledFooter>
    <FooterListLinks>
      {links.map((link) => (
        <li key={link.id}>
          <Link to={link.path}>
            {link.text}
          </Link>
        </li>
      ))}
    </FooterListLinks>

    <FooterListIcons>
      {socialIcons.map((icon) => (
        <li key={icon.id}>
          <a href={icon.url}>{icon.icon}</a>
        </li>
      ))}
    </FooterListIcons>
  </StyledFooter>
);
export default Footer;
