import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { AuthContext } from '../../context/auth/auth.state';
import { StyledForm, FormGroup, StyledInput } from '../dishes/DishForm';
import { StyledBtn } from '../styled/Buttons';
import { AlertContext } from '../../context/alert/alert.state';

export const RegisterStyled = styled.section`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  h1 {
    text-align: center;
    text-transform: uppercase;
  }
  form {
    margin: 0 auto;
    padding: 1rem 0;
    box-shadow: ${({ theme }) => theme.lightShadow};
    width: 80%;
    input,
    button {
      display: block;
      margin: 0.1rem auto;
    }
    input {
      width: 75%;
    }
    button {
      width: 50%;
    }
  }
`;

const Register = props => {
  const { register, error, clearErrors, isAuth } = useContext(AuthContext);
  const { setAlert } = useContext(AlertContext);
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
  });

  const { firstName, lastName, email, password, password2 } = user;

  useEffect(() => {
    if (isAuth) {
      props.history.push('/');
    }
    if (error) {
      setAlert(error, 'warning');
      clearErrors();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, isAuth, props.history]);

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (
      firstName === '' ||
      lastName === '' ||
      email === '' ||
      password === ''
    ) {
      setAlert('Please fill in the fields', 'warning');
    } else {
      register({
        firstName,
        lastName,
        email,
        password,
      });
    }
  };

  return (
    <>
      <RegisterStyled>
        <h1>Register</h1>
        <StyledForm onSubmit={handleSubmit}>
          <FormGroup>
            <StyledInput
              placeholder="first name"
              name="firstName"
              type="text"
              value={firstName}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <StyledInput
              placeholder="last name"
              name="lastName"
              type="text"
              value={lastName}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <StyledInput
              placeholder="email"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <StyledInput
              placeholder="password"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <StyledInput
              placeholder="repeat password"
              type="password"
              name="password2"
              value={password2}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <StyledBtn>Register</StyledBtn>
          </FormGroup>
        </StyledForm>
      </RegisterStyled>
    </>
  );
};

Register.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Register);
