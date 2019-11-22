import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDishItem = styled.div`
  padding: 0.5rem;
  background: ${props => props.theme.blackShadow};
  color: ${props => props.theme.white};
  transition: ${props => props.theme.mainTransition};

  border: 2px solid red;
  width: 35rem;
  margin: 0.6rem 0;
  position: relative;
  border-radius: 0.4rem;
  box-shadow: ${props => props.theme.lightShadow};
  &:hover {
    box-shadow: ${props => props.theme.darkShadow};
  }
`;

const Label = styled.div`
  padding: 0.3rem 0.6rem;
  font-size: 1rem;
  position: absolute;
  top: 1rem;
  right: 0;
  width: 10rem;
  border-radius: 0.4rem;
  background: ${({ type }) =>
    (type === 'main'.toLowerCase() && 'red') ||
    (type === 'Desert' && 'blue') ||
    (type === 'breakfast'.toLowerCase() && 'green')};
`;

const DishItem = ({ dish }) => {
  const { name, country, type } = dish;
  return (
    <StyledDishItem>
      <h3>
        Name: <span>{name}</span>{' '}
      </h3>
      <h4>
        Country: <span>{country}</span>{' '}
      </h4>
      <Label type={type}>
        <small>{type}</small>{' '}
      </Label>
    </StyledDishItem>
  );
};

DishItem.propTypes = {
  dish: PropTypes.shape({
    name: PropTypes.string,
    country: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.string,
  }),
};

export default DishItem;
