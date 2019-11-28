/* eslint-disable react/prop-types */
import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps, withRouter, Redirect } from 'react-router-dom';
import { authContext } from '../../context/auth/auth.state';
import { StyledForm, FormGroup, StyledInput } from '../dishes/DishForm';
import BtnPrimary from '../styled/Button';

interface P {
  history: React.ReactNode;
}
type SomeComponentProps = RouteComponentProps;


const StyledLogin = styled.div`
margin: 7rem auto;
max-width: 45rem;
h1{
  font-size:3rem;
  letter-spacing: .2rem;
  text-align:center;
  text-transform: uppercase;
}
  form{
    input{
      width: 80%;
      margin: 0 auto;
      display: block;
      &:focus{
        width: 84%;
      }
    }
  }
  button{
    display: block;
    margin: 0 auto;
  }
`;

const Login: React.FC<SomeComponentProps> = ({ history }) => {
  const {
    login, isAuth, loading, loadUser,
  } = React.useContext(authContext);
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  React.useEffect(() => {
    loadUser();
    if (isAuth) {
      return history.push('/');
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (email.length === 0 || password.length === 0) {
      alert('fill in the fields please!');
    } else {
      login({ email, password });
    }
  };

  return (
    <StyledLogin>
      <h1>Login</h1>
      <StyledForm onSubmit={handleSubmit}>
        <FormGroup>
          <StyledInput type="email" placeholder="email" required name="email" value={email} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <StyledInput type="password" placeholder="password" required name="password" value={password} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <BtnPrimary>Login</BtnPrimary>
        </FormGroup>
      </StyledForm>
    </StyledLogin>
  );
};
export default withRouter(Login);
