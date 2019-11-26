/* eslint-disable no-mixed-operators */
/* eslint-disable react/prop-types */
import * as React from 'react';
import styled from 'styled-components';
import { Edit2, Delete } from 'styled-icons/feather';

interface Props {
  dish: Dish;
}
interface LabelProps {
  type: string;
}

const StyledDish = styled.div`
  padding: 1rem;
  position: relative;
  background: ${({ theme }) => theme.colors.blackShadow};
  color: ${({ theme }) => theme.colors.white};
  margin: .5rem 0;
  box-shadow: ${({ theme }) => theme.shadow.lightShadow};
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

const DishItem: React.FC<Props> = ({ dish }) => {
  const {
    id, name, description, country, type,
  } = dish;

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
        <span>
          <Edit2 size="35" />
        </span>
        <span>
          <Delete size="35" />
        </span>
      </CtaBtnStyled>

    </StyledDish>
  );
};
export default DishItem;
