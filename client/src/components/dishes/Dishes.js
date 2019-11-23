import React from 'react';
import styled from 'styled-components';
import { DishContext } from '../../context/dishes/dish.state';
import DishItem from './DishItem';

const StyledDish = styled.div``;

const Dishes = () => {
  const { dishes, filteredDishes } = React.useContext(DishContext);
  // TODO: Check filter
  // console.log('FILTRED   ', filteredDishes);
  return (
    <StyledDish>
      {dishes.map(dish => (
        <DishItem key={dish.id} dish={dish} />
      ))}
    </StyledDish>
  );
};

export default Dishes;
