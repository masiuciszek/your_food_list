import * as React from 'react';
import styled from 'styled-components';
import { Redirect, withRouter, RouteComponentProps } from 'react-router-dom';
import { UserStore } from '../../context/users/state.users';
import { BtnPrimary } from '../styled/Buttons';
import { theme } from '../styled/GlobalStyles';

interface ChildComponentProps extends RouteComponentProps<any> {

}


const Login: React.FC<ChildComponentProps> = (props) => {
  const { login, error, isAuth } = React.useContext(UserStore);
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });



  const {
    email, password,
  } = formData;

  React.useEffect(() => {
    // TODO: Push ti another page if logged in

  }, []);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === '' || password === '') {
      alert('please enter the fields');
    } else {
      login({ email, password });
      props.history.push('/');
      setFormData({
        email: '',
        password: '',
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {' '}
      <LoginForm onSubmit={handleLogin}>
        <div className="form-group">
          <input type="email" placeholder="email" required name="email" onChange={handleChange} />
        </div>
        <div className="form-group">
          <input type="password" placeholder="password" required name="password" onChange={handleChange} />

        </div>
        <BtnPrimary type="submit" width="6rem" top="1rem">
          Login
        </BtnPrimary>

      </LoginForm>
      {' '}

    </div>
  );
};


const LoginForm = styled.form`
  padding: 5rem 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${theme.blackish};
  .form-group{
    padding: 1.5rem 0;
    /* TODO;Delete */
    border: 2px solid green;
    width: 100%;
    display:flex;
    justify-content:center;
    input{
      width: 60%;
      padding: .5rem 0.2rem;
      font-size: 1rem;
      box-shadow: ${theme.lightShadow};
      border: 1px solid ${theme.dark};
      border-radius: .4rem;
      transition: ${theme.mainTransition};
      &:focus{
        width: 70%;
        box-shadow: ${theme.darkShadow};
        border: 1px solid ${theme.primary};
      }
    }
  }
  button {
    margin-top: 2rem;
    width:12rem;
  }
`;
export default withRouter(Login);
