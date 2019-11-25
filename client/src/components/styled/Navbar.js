import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Menu } from 'styled-icons/icomoon';
import { links, fadeDown } from '../../utils/mix';
import { AuthContext } from '../../context/auth/auth.state';
import useToggle from '../../hooks/useToggle';
import { DishContext } from '../../context/dishes/dish.state';

const Navbar = () => {
  const { isAuth, user, loading, logout } = React.useContext(AuthContext);
  const { clearDishes } = React.useContext(DishContext);
  const [showMenu, toggleMenu] = useToggle(false);

  const handleLogout = () => {
    logout();
    clearDishes();
  };

  return (
    <StyledNavbar higher={showMenu}>
      <div className="title">
        {isAuth && (
          <h4>
            Welcome <span>Mr. </span>
            {user && user.lastName}
          </h4>
        )}
        <Link to="/">
          <h4>
            Food <span>For</span> You
          </h4>
        </Link>
      </div>
      <span className="toggleIcon" onClick={toggleMenu}>
        <Menu size="35" />
      </span>
      <NavList>
        {links.map(link => (
          <li key={link.id}>
            {' '}
            <Link to={link.path}> {link.text} </Link>{' '}
          </li>
        ))}
        {isAuth && (
          <>
            <li>
              {' '}
              <Link to="/user-profile">Profile</Link>{' '}
            </li>
            <li>
              {' '}
              <span onClick={handleLogout}>Logout</span>{' '}
            </li>
          </>
        )}
        {!isAuth && !loading && (
          <>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </NavList>
      {showMenu && (
        <>
          <StyledMobileList>
            {links.map(link => (
              <li key={link.id}>
                {' '}
                <Link to={link.path}> {link.text} </Link>{' '}
              </li>
            ))}
            {isAuth && (
              <>
                <li>
                  {' '}
                  <Link to="/user-profile">Profile</Link>{' '}
                </li>
                <li>
                  {' '}
                  <span onClick={() => logout()}>Logout</span>{' '}
                </li>
              </>
            )}
            {!isAuth && !loading && (
              <>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}
          </StyledMobileList>
        </>
      )}
    </StyledNavbar>
  );
};

Navbar.propTypes = {};

const StyledNavbar = styled.nav`
  padding: ${({ higher }) => (higher ? '1rem 1rem 12rem 1rem' : '1rem')}
  color: ${props => props.theme.white};
  background: ${props => props.theme.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  animation: ${fadeDown} 500ms ease-in-out;

  .toggleIcon {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    transition: ${props => props.theme.mainTransition};
    &:hover {
      color: ${({ theme }) => theme.primaryColor};
    }
  }
  .title {
    span {
      color: ${({ theme }) => theme.primaryColor};
    }
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
  @media (min-width: 712px) {
    .toggleIcon {
      visibility: hidden;
    }
  }
`;

export const NavList = styled.ul`
  transition: ${props => props.theme.mainTransition};
  display: none;

  li {
    transition: ${props => props.theme.mainTransition};
    margin: 0 0.6rem;
    &:hover {
      transform: scale(1.06);
    }
    a,
    span {
      color: ${props => props.theme.white};
      transition: ${props => props.theme.mainTransition};
      text-transform: uppercase;
      cursor: pointer;
      &:hover {
        color: ${props => props.theme.primaryColor};
        border-bottom: 1px solid ${props => props.theme.white};
      }
    }
  }
  @media (min-width: 712px) {
    display: flex;
    justify-content: flex-end;
  }
`;

const StyledMobileList = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 2rem;
  top: 7rem;
  /* background: ${props => props.theme.black}; */

  /* padding: 1rem 0; */
  /* margin-top: 2rem; */
  width: 12rem;
  animation: ${fadeDown} 500ms ease-in-out;
  li {
    transition: ${props => props.theme.mainTransition};
    margin: 0.4rem 0;
    &:hover {
      transform: scale(1.06);
    }
    a,
    span {
      color: ${props => props.theme.white};
      transition: ${props => props.theme.mainTransition};
      text-transform: uppercase;
      cursor: pointer;
      &:hover {
        color: ${props => props.theme.primaryColor};
        border-bottom: 1px solid ${props => props.theme.white};
      }
    }
  }
  @media (min-width: 712px) {
    display: none;
  }
`;

export default Navbar;
