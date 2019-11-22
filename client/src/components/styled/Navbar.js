import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { links } from '../../utils/mix';

const StyledNavbar = styled.nav`
  padding: 1rem;
  color: ${props => props.theme.white};
  background: ${props => props.theme.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title {
    a {
      color: ${props => props.theme.white};
      h4 {
        font-size: 1.2rem;
        border-bottom: 1px solid ${props => props.theme.white};
        max-width: 12rem;
        span {
          color: ${props => props.theme.primaryColor};
        }
      }
    }
  }
`;

export const NavList = styled.ul`
  transition: ${props => props.theme.mainTransition};
  display: flex;
  justify-content: flex-end;
  li {
    transition: ${props => props.theme.mainTransition};
    margin: 0 0.6rem;
    &:hover {
      transform: scale(1.06);
    }
    a {
      color: ${props => props.theme.white};
      transition: ${props => props.theme.mainTransition};
      text-transform: uppercase;
      &:hover {
        color: ${props => props.theme.primaryColor};
        border-bottom: 1px solid ${props => props.theme.white};
      }
    }
  }
`;

const Navbar = () => {
  let a;
  return (
    <StyledNavbar>
      <div className="title">
        <Link to="/">
          <h4>
            Food <span>For</span> You
          </h4>
        </Link>
      </div>
      <NavList>
        {links.map(link => (
          <li key={link.id}>
            {' '}
            <Link to={link.path}> {link.text} </Link>{' '}
          </li>
        ))}
      </NavList>
    </StyledNavbar>
  );
};

Navbar.propTypes = {};

export default Navbar;
