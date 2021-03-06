import * as React from 'react';
import styled from 'styled-components';
import { Menu } from 'styled-icons/feather';
import { Link } from 'react-router-dom';
import { links } from '../../utils/mix';
import { fadeDown } from '../../utils/animation';
import useToggle from '../../hooks/useToggle';
import { authContext } from '../../context/auth/auth.state';


interface P {
}


interface NavBarProps {
  show: boolean;
}


const Navbar: React.FC<P> = () => {
  const {
    isAuth, user, loading, serverLogout,
  } = React.useContext(authContext);
  const [show, toggleShow] = useToggle(false);


  const handleLogout = () => {
    serverLogout();
  };


  return (
    <StyledNavbar show={show}>
      <div className="title">
        <Link to="/">
          <h3>
              Food
            {' '}
            <span>for</span>
            {' '}
            You
            {' '}
          </h3>
        </Link>
        {!loading && user && (
          <h5>
      Welcome Master
            {' '}
            {user.firstName}
          </h5>
        ) }
      </div>
      {show && (
        <>
          <SmallNavList>
            { links.map((link) => (
              <li key={link.id}>
                <Link to={link.path}>{link.text}</Link>
              </li>
            ))}
            {!isAuth && (
              <>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}
            {
              isAuth && !loading && (
                <>
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li>
                    <span onClick={handleLogout}>Logout</span>
                  </li>
                </>
              )
            }
          </SmallNavList>
        </>
      )}
      <span id="menu-icon" onClick={toggleShow}><Menu size="35" /></span>
      <NavList>
        { links.map((link) => (
          <li key={link.id}>
            <Link to={link.path}>{link.text}</Link>
          </li>
        ))}
        {!isAuth && (
          <>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
        {
          isAuth && !loading && (
            <>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <span onClick={handleLogout}>Logout</span>
              </li>
            </>
          )
        }
      </NavList>

    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav<NavBarProps>`
  /* padding: 1.6rem  1rem; */
  padding: ${({ show }) => (show ? '1rem 1rem 10rem 1rem' : '1.6rem 1rem')};
  animation: ${fadeDown} 500ms ease-in-out;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  #menu-icon{
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    transition: ${({ theme }) => theme.transition.mainTransition};
    &:hover{
      color: ${(props) => props.theme.colors.primaryColor};
    }
  }
  .title{
    text-transform: capitalize;
    position: relative;
    h3{
      font-size: 2rem;
      letter-spacing: .3rem;
      background: ${({ theme }) => theme.colors.blackShadow};
      color: ${({ theme }) => theme.colors.offWhite};
      padding: .4rem .8rem;
      transform: skewX(3deg);
      box-shadow: ${({ theme }) => theme.shadow.blackShadow};
      span {
        color: ${({ theme }) => theme.colors.primaryColor};
      }
    }
  }
  @media(min-width: 930px){
    #menu-icon{
      display: none;
    }
  }
`;


export const NavList = styled.ul`
  padding: .5rem;
  display: none;
  margin-right: 3rem;
  li{
    margin: 0 .4rem;
    transition: ${({ theme }) => theme.transition.mainTransition};
    &:hover{
      transform: scale(1.06);
    }
    a,span{
      font-size: 1.2rem;
      text-transform:uppercase;
      color: ${({ theme }) => theme.colors.white};
      transition: ${({ theme }) => theme.transition.mainTransition};
      cursor: pointer;
      &:hover {
        color: ${(props) => props.theme.colors.primaryColor};
        border-bottom: 1px solid ${(props) => props.theme.colors.white};
      }
    }
  }
  @media(min-width: 930px){
    display: flex;
  }
`;


const SmallNavList = styled(NavList)`
  flex-direction: column;
  animation: ${fadeDown} 500ms ease-in-out;
  display: flex;
  position: absolute;
  top: 7.6rem;

  li{
    margin: .3rem 0;
    a{
      font-size: 1rem;
    }
  }
  @media(min-width: 930px){
    display: none;
  }
`;
export default Navbar;
