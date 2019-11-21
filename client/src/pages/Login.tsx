import * as React from 'react';
import styled from 'styled-components';
import { PageWrapper } from '../components/styled/PageWrapper';
import { theme } from '../components/styled/GlobalStyles';
import Login from '../components/auth/Login';

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


const LoginPage: React.FC<Props> = () => (
  <PageWrapper>
    <LoginFormWrapper>
      <h1>Login</h1>
      <Login />
    </LoginFormWrapper>

  </PageWrapper>
);
export default LoginPage;
