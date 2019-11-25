import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StyledBtn } from '../components/styled/Buttons';

export const StyledAbout = styled.div`
  padding: 2rem 2.2rem;
  margin: 0 auto;
  max-width: 70%;
  min-height: 65vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.blackShadow};
  h1 {
    color: ${({ theme }) => theme.white};
    text-transform: uppercase;
  }
  p {
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
    span {
      color: ${({ theme }) => theme.primaryColor};
    }
  }
`;

const About = () => (
  <StyledAbout>
    <h1>Food for you</h1>
    <p>
      A full stack <span>MERN stack</span> application built with Node <br />
      <br />
      Js, Express on the backend and React Js⚛️ , Context API on the frontend{' '}
    </p>
    <Link to="/">
      <StyledBtn>← λ Return</StyledBtn>
    </Link>
  </StyledAbout>
);

About.propTypes = {};

export default About;
