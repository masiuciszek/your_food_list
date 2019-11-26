import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styled/theme';
import GlobalStyles from './styled/GlobalStyles';
interface Props {
  children: JSX.Element[] | JSX.Element;

}
const Layout: React.FC<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <main className="main">{children}</main>
  </ThemeProvider>
);
export default Layout;
