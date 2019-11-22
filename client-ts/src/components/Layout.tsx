/* eslint-disable react/prop-types */
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles, { theme } from './styled/GlobalStyles';
import Navbar from './styled/Navbar';
import Footer from './styled/Footer';


const Layout: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <Navbar />
      <main>{children}</main>
      <Footer />

    </>

    {' '}

  </ThemeProvider>
);
export default Layout;
