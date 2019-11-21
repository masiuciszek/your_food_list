import * as React from 'react';
import styled from 'styled-components';
import { PageWrapper } from '../components/styled/PageWrapper';

interface Props {

}

const StyledAbout = styled.div`
  min-height: 80vh;
`;


const About: React.FC<Props> = () => (
  <PageWrapper>
    {' '}
    <h1>Food list app</h1>
    {' '}
    <p>lightweight fullstack application built with React , Typescript and Node js</p>
    {' '}
  </PageWrapper>
);
export default About;
