import * as React from 'react';
import styled from 'styled-components';
import Dishes from '../components/dishes/Dishes';
import DishForm from '../components/dishes/DishForm';
import { fadeDown } from '../utils/animation';

interface Props {

}

const StyledGrid = styled.div`
  display: grid;
  grid-template-rows: auto;
  /* TODO: Delete this */
  border: 2px solid black;
  margin: 0 auto;
  padding: 1rem;
  min-height: 60vh;
  animation: ${fadeDown} 500ms ease-in-out;
  grid-gap: 15px;
  align-content:center;
  @media(min-width: 400px){
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
  @media(max-width: 400px){
    display: flex;
    flex-direction: column;

  }
`;

const HomePage: React.FC<Props> = () => (
  <>
    <h1 style={{
      textAlign: 'left', margin: '1rem 0', borderBottom: '2px solid #333', width: '15rem',
    }}
    >
    Add A Dish
    </h1>

    <StyledGrid>
      <DishForm />
      <Dishes />
    </StyledGrid>
  </>
);
export default HomePage;
