/* eslint-disable no-mixed-operators */
/* eslint-disable react/prop-types */
import * as React from 'react';
import styled from 'styled-components';
import { Edit2, Delete } from 'styled-icons/feather';
import { Dish } from '../../types';
import { DishContext } from '../../context/dishes/dish.state';
import { fadeDown } from '../../utils/animation';

interface Props {
  dish: Dish;
}
interface LabelProps {
  type: string;
}


const DishItem: React.FC<Props> = ({ dish }) => {
  const { deleteDish, setCurrent } = React.useContext(DishContext);
  const {
    id, name, description, country, type,
  } = dish;


  const handleDelete = () => {
    deleteDish(id);
  };

  return (
    <StyledDish>
      <div className="head">
        <h3>
          Dish Name:
          {' '}
          {name}
        </h3>
        <Label type={type}><small>{type}</small></Label>
      </div>
      <h3>
        Country:
        {' '}
        {country.toLowerCase() === 'italy' && '🇮🇹'
         || country.toLowerCase() === 'spain' && '🇪🇸'
         || country.toLowerCase() === 'england' && '🏴󠁧󠁢󠁥󠁮󠁧󠁿'
         || country.toLowerCase() === 'america' && '🇺🇸'
         || 'λ' }
      </h3>

      <p>
        Desc:
        {' '}
        {description}
      </p>
      <CtaBtnStyled>
        <span onClick={() => setCurrent(dish)}>
          <Edit2 size="35" />
        </span>
        <span onClick={handleDelete}>
          <Delete size="35" />
        </span>
      </CtaBtnStyled>

    </StyledDish>
  );
};

const StyledDish = styled.div`
  padding: 1rem;
  position: relative;
  background: ${({ theme }) => theme.colors.blackShadow};
  color: ${({ theme }) => theme.colors.white};
  margin: .5rem 0;
  box-shadow: ${({ theme }) => theme.shadow.lightShadow};
  animation: ${fadeDown} 500ms ease-in-out;
  .head{
    display: flex;
    justify-content: space-between;

  }
`;

const Label = styled.span<LabelProps>`
  padding: .5rem;
  /* TODO:delete */
  border: 2px solid #fff;
  margin-left: auto;
  border-radius: ${({ theme }) => theme.borderRadius};
  width:7rem;
  height: 2.6rem;
  text-align:center;
  background: ${({ theme, type }) => type === 'snack' && theme.colors.secondary
  || type === 'breakfast' && theme.colors.darkishGreen
  || type === 'main' && theme.colors.dark || theme.colors.mainBlack};
  box-shadow: ${({ theme }) => theme.shadow.lightShadow};
  letter-spacing: .1rem;
  text-transform:uppercase;
`;

const CtaBtnStyled = styled.div`
  display: flex;
  justify-content:flex-end;
  span{
    margin: 0 .4rem;
    cursor: pointer;
    transition: ${({ theme }) => theme.transition.mainTransition};
    &:hover:first-child{
      color: ${({ theme }) => theme.colors.primaryColor};;
    }
    &:hover:last-child{
      color: ${({ theme }) => theme.colors.danger};;
    }
  }
`;
export default DishItem;
