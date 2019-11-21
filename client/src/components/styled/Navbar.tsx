import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MenuAltRight } from 'styled-icons/boxicons-regular';
import { theme } from './GlobalStyles';
import navigationLinks from '../../utils/links';
import useToggle from '../../hooks/useToggle';
import { fadeIn } from '../../utils/animations';
import { UserStore } from '../../context/users/state.users';

interface Props {

}

const StyledNav = styled.nav`
  padding: 1rem;
  background: ${theme.dark};
  color: ${theme.white};
  display: flex;
  width: 100%;
  position: relative;
  .title{
    position: relative;
    font-size: 1.4rem;
    text-transform: capitalize;
    a{
      color: ${theme.white};
    }
  }
  #menu-icon{
    position: absolute;
    top: 1rem;;
    right: 1rem;
    cursor: pointer;
    transition: ${theme.mainTransition};
    &:hover{
      color: ${theme.primary};
      transform: scale(1.05);
    }
  }
  @media(min-width: 610px){
    #menu-icon{
    display: none;
  }

  }
`;

const StyledNavigationList = styled.ul`
  padding: 0.4rem;
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  align-items: center;
  li{
    display: none;
    margin: 0 1rem;
    transition: ${theme.mainTransition};
    &:hover{
      transform: scale(1.08);
      border-bottom: 1px solid ${theme.white};
    }
    a{
      color: ${theme.white};
      font-size: 1rem;
      text-transform: uppercase;
      transition: ${theme.mainTransition};
      &:hover{
        color: ${theme.primary};
      }
    }
  }
  @media(min-width: 610px){
    li{
      display: block;
    }
  }
`;

const MobileList = styled.ul`
  position: absolute;
  top: 5rem;
  left: 1rem;
  transition: ${theme.mainTransition};
  animation: ${fadeIn} 600ms ease-in-out;
  li{
    margin: .6rem 0;
    a{
      color: ${theme.dark};
      font-size: 1.1rem;
      padding: .3rem .5rem;
      transition: ${theme.mainTransition};

      &:hover{
        background: ${theme.black};
        color: ${theme.white};
        z-index:1;

      }
    }
  }
    @media(min-width: 610px){
      display: none;
  }
`;


const Navbar: React.FC<Props> = () => {
  const { user, isAuth } = React.useContext(UserStore);
  const [showMobileNav, toggleMobileNav] = useToggle(false);
  return (

    <StyledNav>
      <div className="title">
        <Link to="/">
          <h3>Your food list</h3>
          <h5>
            {isAuth && user && <h4>{user.firstName}</h4> }
            {' '}
          </h5>
        </Link>
      </div>
      <MenuAltRight size="35" id="menu-icon" onClick={toggleMobileNav} />
      {showMobileNav && (

        <MobileList>
          {navigationLinks.map((link, i) => (
            <li key={i}>
              <Link to={link.path}>
                {' '}
                {link.text}
                {' '}
              </Link>
            </li>
          ))}
        </MobileList>
      )}
      <StyledNavigationList>

        {navigationLinks.map((link, i) => (
          <li key={i}>
            <Link to={link.path}>
              {' '}
              {link.text}
              {' '}
            </Link>
          </li>
        ))}
      </StyledNavigationList>
      {' '}
    </StyledNav>
  );
};
export default Navbar;
