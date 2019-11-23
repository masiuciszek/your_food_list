import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledBtn } from '../styled/Buttons';
import { DishContext } from '../../context/dishes/dish.state';

const DishForm = ({ search, closeSearchInput }) => {
  const { addDish, current, clearCurrent, updateDish } = useContext(
    DishContext
  );
  const [formData, setFormData] = useState({
    name: '',
    type: 'main',
    country: '',
    description: '',
  });
  const { name, type, country, description } = formData;

  useEffect(() => {
    if (current !== null) {
      setFormData(current);
    } else {
      setFormData({
        name: '',
        type: 'main',
        country: '',
        description: '',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, DishContext]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // const newDish = { id: uuid(), name, type, country, description };
    if (current === null) {
      addDish(formData);
    } else {
      updateDish(formData);
    }
    setFormData({
      name: '',
      type: 'main',
      country: '',
      description: '',
    });
  };

  const handleClose = () => {
    if (search) {
      closeSearchInput();
    }
  };

  return (
    <DishFormWrapper onClick={handleClose}>
      <h3>{!current ? 'Add A Dish' : 'Update your dish'}</h3>
      <StyledForm onSubmit={handleSubmit}>
        <FormGroup className="form-group">
          <StyledInput
            type="text"
            placeholder="Dish Name"
            name="name"
            onChange={handleChange}
            value={name}
          />
        </FormGroup>
        <FormGroup className="form-group">
          <StyledInput
            type="text"
            name="country"
            placeholder="Country"
            onChange={handleChange}
            value={country}
          />
        </FormGroup>

        <FormGroup>
          <select name="type" id="" onChange={handleChange} value={type}>
            <StyledOption disabled>Choose food type</StyledOption>
            <StyledOption value="breakfast">breakfast</StyledOption>
            <StyledOption value="main">main</StyledOption>
            <StyledOption value="dessert">dessert</StyledOption>
            <StyledOption value="snack">snack</StyledOption>
          </select>
        </FormGroup>
        <FormGroup>
          <StyledInput
            type="text"
            name="description"
            placeholder="description"
            onChange={handleChange}
            value={description}
          />
        </FormGroup>
        <FormGroup>
          <StyledBtn type="submit">
            {!current ? 'Add new dish' : 'Update dish'}
          </StyledBtn>
          {current && (
            <StyledBtn
              style={{ marginLeft: '0.5rem' }}
              onClick={() => clearCurrent()}
            >
              Regret
            </StyledBtn>
          )}
        </FormGroup>
      </StyledForm>
    </DishFormWrapper>
  );
};

DishForm.propTypes = {
  search: PropTypes.bool,
  closeSearchInput: PropTypes.func.isRequired,
};

const DishFormWrapper = styled.div`
  padding: 0.4rem;
  /*  */
  height: 100%;
  width: 100%;

  h3 {
    padding: 0 1rem;
  }
  @media (max-width: 1106px) {
    input {
      width: 100%;
    }
  }
`;

export const StyledForm = styled.form`
  padding: 0.4rem;

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

export default DishForm;
