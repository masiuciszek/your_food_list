import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PizzaSlice, Edit } from 'styled-icons/fa-solid';
import { Delete } from 'styled-icons/feather';
import { DishContext } from '../../context/dishes/dish.state';

const StyledDishItem = styled.div`
  padding: 0.5rem;
  background: ${props => props.theme.blackShadow};
  color: ${props => props.theme.white};
  transition: ${props => props.theme.mainTransition};
  border: 2px solid ${({ theme }) => theme.black};
  width: 35rem;
  margin: 0.6rem 0;
  position: relative;
  border-radius: 0.4rem;
  box-shadow: ${props => props.theme.lightShadow};
  &:hover {
    box-shadow: ${props => props.theme.darkShadow};
  }
  .btn-group {
    margin-left: auto;
    width: 10rem;
    display: flex;
    justify-content: flex-end;
    span {
      transition: ${props => props.theme.mainTransition};
      cursor: pointer;
      margin: 0 0.5rem;
      &:hover {
        color: ${props => props.theme.danger};
      }
    }
    span:first-child {
      &:hover {
        color: ${props => props.theme.primaryColor};
      }
    }
  }
  @media (max-width: 845px) {
    width: 25rem;
  }
  /* @media (max-width: 459px) {
    width: 100%;
  } */
`;

const Label = styled.div`
  padding: 0.3rem 0.6rem;
  font-size: 1rem;
  position: absolute;
  top: 0.4rem;
  right: 0;
  border: 1px solid ${({ theme }) => theme.black};
  width: 10rem;
  letter-spacing: 0.1rem;
  border-radius: 0.4rem;
  box-shadow: ${props => props.theme.lightShadow};
  color: ${({ type, theme }) => type === 'snack' && `${theme.dark}`};
  background: ${({ type, theme }) =>
    (type === 'main'.toLowerCase() && `${theme.darkishGreen}`) ||
    (type === 'Desert' && `${theme.secondary}`) ||
    (type === 'breakfast'.toLowerCase() && `${theme.dark}`) ||
    (type === 'snack' && `${theme.offWhite}`)};
  @media (max-width: 845px) {
    width: 7rem;
  }
  @media (max-width: 459px) {
    width: 5rem;
  }
`;

const DishItem = ({ dish }) => {
  const { deleteDish } = React.useContext(DishContext);
  const { name, country, type, description, id } = dish;

  return (
    <StyledDishItem>
      <h3>
        Name: <span>{name}</span>{' '}
        <span>
          <PizzaSlice size="25" />
        </span>
      </h3>
      <h4>
        Country: <span>{country}</span>{' '}
        <span>
          {' '}
          {(country.toLowerCase() === 'italy' && '🇮🇹') ||
            (country.toLowerCase() === 'spain' && '🇪🇸') ||
            (country.toLowerCase() === 'france' && '🇫🇷') ||
            (country.toLowerCase() === 'sweden' && '🇸🇪') ||
            '🏴'}{' '}
        </span>{' '}
      </h4>
      <Label type={type}>
        <small>{type}</small>{' '}
      </Label>
      <p>{description}</p>
      <div className="btn-group">
        <span>
          <Edit size="30" />
        </span>
        <span onClick={() => deleteDish(id)}>
          <Delete size="30" />
        </span>
      </div>
    </StyledDishItem>
  );
};

DishItem.propTypes = {
  dish: PropTypes.shape({
    name: PropTypes.string,
    country: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default DishItem;
