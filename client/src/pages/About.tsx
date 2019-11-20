import * as React from 'react';
import styled from 'styled-components';

interface Props {

}

const StyledAbout = styled.div`
  padding: 3rem 0;
  min-height: 80vh;
`;

const About: React.FC<Props> = () => (
  <StyledAbout>
    {' '}
    <h1>Food list app</h1>
    {' '}
    <p>lightweight fullstack application built with React , Typescript and Node js</p>
    {' '}
  </StyledAbout>
);
export default About;
