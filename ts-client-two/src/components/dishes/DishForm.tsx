import * as React from 'react';
import styled from 'styled-components';
import BtnPrimary from '../styled/Button';

interface Props {

}
const StyledForm = styled.form`
  padding: 1rem;
  align-self:center;
  /* box-shadow: ${({ theme }) => theme.shadow.lightShadow}; */
  input[placeholder="description"]{
    height: 7rem;
  }
`;

const FormGroup = styled.div`
  padding: .5rem;

`;
const StyledInput = styled.input`
  padding: .5rem .4rem;
  /* TODO: */
  border: 2px solid orange;
  width: 90%;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 1.1rem;
  box-shadow: ${({ theme }) => theme.shadow.lightShadow};
  transition: ${({ theme }) => theme.transition.mainTransition};
  &:hover{
    box-shadow: ${({ theme }) => theme.shadow.darkShadow};
  }
  &:focus{
    width: 95%;
    border: 2px solid ${({ theme }) => theme.colors.black};
  }
`;
const StyledSelect = styled.select`
  padding: .5rem 0;
  /* TODO: */
  border: 2px solid orange;
`;


const DishForm: React.FC<Props> = () => {
  let a;
  return (
    <>
      <StyledForm>
        <FormGroup>
          <StyledInput type="text" placeholder="name" name="name" />
        </FormGroup>
        <FormGroup>
          <StyledInput type="text" placeholder="country" name="country" />
        </FormGroup>
        <FormGroup>
          <StyledSelect>
            <option disabled>Choose your dish type</option>
            <option value="breakfast">breakfast</option>
            <option value="snack">snack</option>
            <option value="snack">snack</option>
            <option value="dessert">dessert</option>
          </StyledSelect>
        </FormGroup>
        <FormGroup>
          <StyledInput type="text" placeholder="description" name="description" />
        </FormGroup>
        <FormGroup><BtnPrimary>Add new Dish</BtnPrimary></FormGroup>
      </StyledForm>
    </>
  );
};
export default DishForm;
