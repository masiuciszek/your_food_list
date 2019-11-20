import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from './GlobalStyles';
import navigationLinks from '../../utils/links';

interface Props {

}

const StyledNav = styled.nav`
  padding: 1rem;
  background: ${theme.dark};
  color: ${theme.white};
`;


const Navbar: React.FC<Props> = () => (
  <StyledNav>
    <ul>
      {navigationLinks.map((link, i) => (
        <li key={i}>
          <Link to={link.path}>
            {' '}
            {link.text}
            {' '}
          </Link>
        </li>
      ))}
    </ul>
    <h1>NavBar</h1>
    {' '}
  </StyledNav>
);
export default Navbar;
