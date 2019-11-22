import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AppWrapper } from '../components/styled/AppWrapper';
import Dishes from '../components/dishes/Dishes';

const HomeWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 2rem;
  /* TODO:DELETE */
  border: 2px solid red;
  justify-content: center;
  align-items: center;
  justify-items: center;
`;
const HomePage = () => (
  <HomeWrapper>
    <div>
      {' '}
      <h1>Form HERE</h1>
    </div>
    <Dishes />
  </HomeWrapper>
);

HomePage.propTypes = {};

export default HomePage;
