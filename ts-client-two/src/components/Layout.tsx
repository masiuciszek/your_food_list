import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styled/theme';
import GlobalStyles from './styled/GlobalStyles';
import Navbar from './styled/Navbar';
import Footer from './styled/Footer';
interface Props {
  children: JSX.Element[] | JSX.Element;

}
const Layout: React.FC<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>
  <GlobalStyles />
    <Navbar/>
    <main className="main">{children}</main>
    <Footer/>
  </ThemeProvider>
);
export default Layout;
