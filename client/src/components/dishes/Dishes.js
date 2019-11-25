import React, { useEffect } from 'react';
import styled from 'styled-components';
import Spinner from '../styled/Spinner';
import { DishContext } from '../../context/dishes/dish.state';
import DishItem from './DishItem';

const StyledDish = styled.div``;

const Dishes = () => {
  const { dishes, filteredDishes, loading, getDishes } = React.useContext(
    DishContext
  );
  useEffect(() => {
    getDishes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <StyledDish>
      {!dishes && <h3>Please Add som e dishes</h3>}
      {dishes !== null && !loading ? (
        <>
          {filteredDishes !== null
            ? filteredDishes.map(dish => (
                <DishItem key={dish._id} dish={dish} />
              ))
            : dishes.map(dish => <DishItem key={dish._id} dish={dish} />)}
        </>
      ) : (
        <Spinner />
      )}
    </StyledDish>
  );
};

export default Dishes;

// {!loading && filteredDishes !== null && filteredDishes.length > 0
//   ? filteredDishes.map(dish => <DishItem key={dish._id} dish={dish} />)
//   : dishes.map(dish => <DishItem key={dish._id} dish={dish} />)}
