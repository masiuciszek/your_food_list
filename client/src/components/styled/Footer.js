import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { links, iconsList } from '../../utils/mix';
import { NavList } from './Navbar';

const StyledFooter = styled.footer`
  padding: 1rem;
  background: ${props => props.theme.black};
  color: ${props => props.theme.white};
  display: flex;
  justify-content: center;
  flex-direction: column;
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

const IconsGroup = styled.ul`
  transition: ${props => props.theme.mainTransition};
  display: flex;
  justify-content: flex-end;
  margin: 1rem 0;
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

      }
    }
  }
`;

const Footer = () => {
  let a;
  return (
    <StyledFooter>
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
      <IconsGroup>
        {iconsList.map(icon => (
          <li key={icon.id}>
            <a href={icon.url}>{icon.icon}</a>
          </li>
        ))}
      </IconsGroup>
    </StyledFooter>
  );
};

Footer.propTypes = {};

export default Footer;
