import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AppWrapper } from '../components/styled/AppWrapper';
import Dishes from '../components/dishes/Dishes';
import DishForm from '../components/dishes/DishForm';

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
`;

const HomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  /* TODO:DELETE */
  border: 2px solid red;
  justify-content: center;
  align-items: center;
  justify-items: center;
  @media (min-width: 1020px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 2rem;
  }
`;
const HomePage = () => (
  <Center>
    <HomeWrapper>
      <DishForm />
      <Dishes />
    </HomeWrapper>
  </Center>
);

HomePage.propTypes = {};

export default HomePage;
