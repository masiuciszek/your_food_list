/* eslint-disable react/prop-types */
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles, { theme } from './styled/GlobalStyles';


const Layout: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <main>{children}</main>
      {' '}
    </>

    {' '}

  </ThemeProvider>
);
export default Layout;
