import * as React from 'react';
import styled from 'styled-components';
import { theme } from './GlobalStyles';

interface Props {

}

const StyledFooter = styled.footer`
  padding: 1rem;
  background: ${theme.dark};
  color: ${theme.white};
`;

const Footer: React.FC<Props> = () => (
  <StyledFooter>
    <h1>Footer</h1>
  </StyledFooter>
);
export default Footer;
