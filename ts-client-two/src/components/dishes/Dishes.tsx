import * as React from 'react';
import styled from 'styled-components';
import { DishContext } from '../../context/dishes/dish.state';
import DishItem from './DishItem';
import { Dish } from '../../types';


interface Props {

}

const StyledDishes = styled.div`
  padding: .2rem;

`;
const Dishes: React.FC<Props> = () => {
  const { dishes } = React.useContext(DishContext);
  if (dishes && dishes.length === 0) {
    return <h4 style={{ margin: '3rem 0', fontSize: '2.4rem' }}>Please Add A Dish</h4>;
  }
  return (
    <StyledDishes>
      {dishes.map((dish: Dish) => <DishItem key={dish.id} dish={dish} />)}
    </StyledDishes>
  );
};
export default Dishes;
