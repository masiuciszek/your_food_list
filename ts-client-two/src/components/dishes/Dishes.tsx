import * as React from 'react';
import { DishContext } from '../../context/dishes/dish.state';

interface Props {

}

const Dishes: React.FC<Props> = () => {
  const { dishes } = React.useContext(DishContext);
  return (
    <div>
      {dishes.map((dish) => <h3>{dish.name}</h3>)}
    </div>
  );
};
export default Dishes;
