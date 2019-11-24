import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import { AuthContext } from '../../context/auth/auth.state';
import { StyledForm, FormGroup, StyledInput } from '../dishes/DishForm';
import { StyledBtn } from '../styled/Buttons';
import { RegisterStyled } from './Register';
import { AlertContext } from '../../context/alert/alert.state';

const Login = props => {
  const { login, isAuth, error, clearErrors } = useContext(AuthContext);
  const { setAlert } = useContext(AlertContext);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (isAuth) {
      props.history.push('/');
    }
    if (error) {
      setAlert(error, 'warning');
      clearErrors();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth, props.history]);

  const { email, password } = user;

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (email.length === '' || password.length === '') {
      setAlert('please fill in the fields', 'warning');
    } else {
      login({ email, password });
    }
  };

  return (
    <>
      <RegisterStyled>
        <h1>Login</h1>
        <StyledForm onSubmit={handleSubmit}>
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
            <StyledBtn>Login</StyledBtn>
          </FormGroup>
        </StyledForm>
      </RegisterStyled>
    </>
  );
};

Login.propTypes = {
  history: PropTypes.object,
};

export default Login;
