import React from 'react';
import styled from 'styled-components';
import { DishContext } from '../../context/dishes/dish.state';
import DishItem from './DishItem';

const StyledDish = styled.div``;

const Dishes = () => {
  const { dishes, filteredDishes } = React.useContext(DishContext);

  return (
    <StyledDish>
      {filteredDishes !== null && filteredDishes.length > 0
        ? filteredDishes.map(dish => <DishItem key={dish.id} dish={dish} />)
        : dishes.map(dish => <DishItem key={dish.id} dish={dish} />)}
    </StyledDish>
  );
};

export default Dishes;

// {dishes.length === 0 ? (
//   <h4>Add A Dish</h4>
// ) : (
//   dishes.map(dish => <DishItem key={dish.id} dish={dish} />)
// )}
