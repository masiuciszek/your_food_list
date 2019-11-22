import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import Navbar from './Navbar';
import Footer from './Footer';

export const theme = {
  black: '#393939',
  blackShadow: 'rgba(0,0,0,0.5)',
  darkishGreen: '#1c6373',
  secondary: '#23aa8f',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  primaryColor: '#fafa6e',
  primaryShadow: 'rgba(250,250,110,0.6)',
  white: '#fff',
  offWhite2: '#f7f7f7',
  mainBlack: '#222',
  dark: '#2a4858',
  darkGrey: '#afafaf',
  mainTransition: 'all 0.3s linear',
  secondaryTransition: 'all 0.3s ease-in-out',
  quickTransition: 'all 200ms ease-in-out',
  mainSpacing: '4px',
  lightShadow: '2px 5px 3px 0px rgba(42, 72, 88, 0.5)',
  darkShadow: '4px 10px 5px 0px rgba(42, 72, 88, 0.5)',
};

const Layout = props => (
  <ThemeProvider theme={theme}>
    <Navbar />
    <GlobalStyles />
    <main>{props.children}</main>
    <Footer />
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Layout;
