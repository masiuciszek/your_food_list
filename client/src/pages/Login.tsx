import * as React from 'react'
import { PageWrapper } from '../components/styled/PageWrapper';
import styled from 'styled-components';
import { theme } from '../components/styled/GlobalStyles';
import { BtnPrimary } from '../components/styled/Buttons';

interface Props {

}

const LoginFormWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  /* TODO: Delete this */
  border: 2px solid red;
  height: 100%;

  display: grid;
  align-items: center;
  h1{
    text-align: center;
    font-size: 2rem;
  }
`;

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


 const LoginPage: React.FC<Props> = () => {
    return (
      <PageWrapper>
      <LoginFormWrapper>
      <h1>Login</h1>
        <LoginForm>
          <div className="form-group">
            <input type="email" placeholder="email" required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="password" required />
          </div>
          <BtnPrimary type="submit" width="6rem" top="1rem" >
          Login
          </BtnPrimary>

        </LoginForm>
      </LoginFormWrapper>

      </PageWrapper>
    );
}
export default LoginPage;