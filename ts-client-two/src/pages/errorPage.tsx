import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BtnPrimary from '../components/styled/Button';

interface Props {

}

const StyledError = styled.section`
padding: 5rem 0;
display: flex;
justify-content:center;
align-items:center;
height: 60vh;
flex-direction: column;
h1{
  background: ${({ theme }) => theme.colors.blackShadow};
  padding: 1rem 1.6rem;
  box-shadow: ${({ theme }) => theme.shadow.lightShadow};
  transform: skewX(4deg);
}
`;

const ErrorPage: React.FC<Props> = () => (
  <StyledError>
    <h1>Oooops.... page not found!</h1>
    <Link to="/">
      <BtnPrimary>
          Back ←
      </BtnPrimary>
    </Link>
  </StyledError>
);
export default ErrorPage;
