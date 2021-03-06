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
  const { dishes, flirtedDishes, getDishes } = React.useContext(DishContext);

  React.useEffect(() => {
    getDishes();
  }, []);

  if (dishes && dishes.length === 0) {
    return <h4 style={{ margin: '3rem 0', fontSize: '2.4rem' }}>Please Add A Dish</h4>;
  }

  return (
    <StyledDishes>
      {flirtedDishes !== null && flirtedDishes.length > 0 ? flirtedDishes.map((dish: Dish) => <DishItem key={dish._id} dish={dish} />)
        : dishes.map((dish: Dish) => <DishItem key={dish._id} dish={dish} />) }
    </StyledDishes>
  );
};
export default Dishes;
// {dishes.map((dish: Dish) => <DishItem key={dish.id} dish={dish} />)   }
