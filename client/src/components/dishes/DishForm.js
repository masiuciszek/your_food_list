import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledBtn } from '../styled/Buttons';

const DishFormWrapper = styled.div`
  padding: 0.4rem;
  /* TODO:DELETE */
  border: 2px solid red;
  height: 100%;
  width: 100%;
`;

export const StyledForm = styled.form`
  padding: 0.4rem;
  /* TODO:DELETe */
  border: 2px solid blue;
  [placeholder='description'] {
    height: 6rem;
    ::placeholder {
    }
  }
`;

export const StyledInput = styled.input`
  font-size: 1rem;
  box-shadow: ${props => props.theme.lightShadow};
  width: 80%;
  padding: 0.3rem 0.7rem;
  /* margin: 0.6rem; */
  border-radius: 0.3rem;
  transition: ${props => props.theme.mainTransition};
  border: 2px solid ${({ theme }) => theme.black};

  ::placeholder {
    color: ${({ theme }) => theme.black};
  }
  &:focus {
    width: 84%;
    border: 2px solid ${({ theme }) => theme.darkishGreen};
    box-shadow: ${props => props.theme.darkShadow};
  }
`;

export const FormGroup = styled.section`
  padding: 0.5rem;
`;
export const StyledOption = styled.option``;

const DishForm = () => {
  let a;
  return (
    <DishFormWrapper>
      <StyledForm>
        <FormGroup className="form-group">
          <StyledInput type="text" placeholder="Dish Name" />
        </FormGroup>
        <FormGroup className="form-group">
          <StyledInput type="text" placeholder="Country" />
        </FormGroup>

        <FormGroup>
          <select name="" id="">
            <StyledOption disabled>Choose food type</StyledOption>
            <StyledOption value="breakfast">breakfast</StyledOption>
            <StyledOption value="main">main</StyledOption>
            <StyledOption value="dessert">dessert</StyledOption>
            <StyledOption value="snack">snack</StyledOption>
          </select>
        </FormGroup>
        <FormGroup>
          <StyledInput type="text" placeholder="description" />
        </FormGroup>
        <FormGroup>
          <StyledBtn type="submit">Submit</StyledBtn>
        </FormGroup>
      </StyledForm>
    </DishFormWrapper>
  );
};

DishForm.propTypes = {};

export default DishForm;
