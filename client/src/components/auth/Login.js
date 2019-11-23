import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AuthContext } from '../../context/auth/auth.state';
import { StyledForm, FormGroup, StyledInput } from '../dishes/DishForm';
import { StyledBtn } from '../styled/Buttons';
import { RegisterStyled } from './Register';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <RegisterStyled>
        <h1>Login</h1>
        <StyledForm>
          <FormGroup>
            <StyledInput
              placeholder="email"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <StyledInput
              placeholder="password"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <StyledBtn>Login</StyledBtn>
          </FormGroup>
        </StyledForm>
      </RegisterStyled>
    </>
  );
};

Login.propTypes = {};

export default Login;
