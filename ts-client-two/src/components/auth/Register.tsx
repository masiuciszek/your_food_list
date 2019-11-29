import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps, withRouter, Redirect } from 'react-router-dom';
import { StyledInput, StyledForm, FormGroup } from '../dishes/DishForm';
import { authContext } from '../../context/auth/auth.state';
import BtnPrimary from '../styled/Button';

interface Props {
  history: React.ReactNode;
}


type RegisterProp = RouteComponentProps

export const StyledRegister = styled.div`
  padding: 1rem;
  margin: 0 auto;
  max-width: 50rem;
  form{
    input{
      witdh: 80%;
    }
    h1{
      font-size:3rem;
      letter-spacing: .2rem;
      text-transform: uppercase;
    }
  }
`;


const Register: React.FC<RegisterProp> = ({ history }) => {
  const { register, isAuth, loadUser } = React.useContext(authContext);

  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
  });

  const {
    firstName, lastName, email, password, password2,
  } = formData;


  const goHome = () => history.push('/');


  React.useEffect(() => {
    loadUser();
    if (isAuth) {
      goHome();
    }
  }, [isAuth, history]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (password !== password2 || firstName === ''
    || lastName === '' || email === '') {
      alert('please enter the fields');
    } else {
      register(formData);
    }
  };

  return (
    <StyledRegister>
      <StyledForm onSubmit={handleSubmit}>
        <h1>Register</h1>
        <FormGroup>
          <StyledInput type="text" placeholder="first name" required name="firstName" value={firstName} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <StyledInput type="text" placeholder="last name" required name="lastName" value={lastName} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <StyledInput type="email" placeholder="email" required name="email" value={email} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <StyledInput type="password" placeholder="password" required name="password" value={password} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <StyledInput type="password" placeholder="repeat password" required name="password2" value={password2} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <BtnPrimary>Register</BtnPrimary>
        </FormGroup>
      </StyledForm>

    </StyledRegister>
  );
};
export default withRouter(Register);
