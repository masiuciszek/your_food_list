import * as React from 'react';
import styled from 'styled-components';

interface Props {
  dish: Dish;
}

const StyledDish = styled.div`
  padding: 1rem;
  background: ${({ theme }) => theme.colors.blackShadow};
  color: ${({ theme }) => theme.colors.white};
  margin: .5rem 0;
  box-shadow: ${({ theme }) => theme.shadow.lightShadow};
  h3{

  }
`;

const Label = styled.aside`
  padding: .5rem;
`;

const DishItem: React.FC<Props> = ({ dish }) => {
  const {
    id, name, description, country, type,
  } = dish;

  return (
    <StyledDish>
      <h3>
        Dish Name:
        {' '}
        {name}
      </h3>
      <h3>
        Country:
        {' '}
        {country}
      </h3>
      <Label><small>{type}</small></Label>
      <p>
        Desc:
        {' '}
        {description}
      </p>
    </StyledDish>
  );
};
export default DishItem;
