import * as React from 'react';
import { DishContext } from '../../context/dishes/dish.state';
import DishItem from './DishItem';

interface Props {

}

const Dishes: React.FC<Props> = () => {
  const { dishes } = React.useContext(DishContext);
  return (
    <div>
      {dishes.map((dish) => <DishItem key={dish.id} dish={dish} />)}
    </div>
  );
};
export default Dishes;
