
import { createGlobalStyle } from 'styled-components';


export const theme: ThemeValues = {
  primary: '#26A69A',
  secondary: '#D9CB9E',
  darkish: '#374140',
  dark: '#2A2C2B',
  black: '#333',
  grey: '#BDC3C7',
  white: '#fff',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  primaryShadow: 'rgba(250,250,110,0.6)',
  offWhite2: '#f7f7f7',
  darkGrey: '#afafaf',
  mainTransition: 'all 0.3s linear',
  secondaryTransition: 'all 0.3s ease-in-out',
  quickTransition: 'all 200ms ease-in-out',
  mainSpacing: '4px',
  lightShadow: '2px 5px 3px 0px rgba(42, 72, 88, 0.5)',
  darkShadow: '4px 10px 5px 0px rgba(42, 72, 88, 0.5)',
};


const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Nunito:300,300i,400,400i,600,600i,700,700i&display=swap');
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
*::before,*::after,*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Nunito', sans-serif;
  line-height: 1.4;
  font-size: 1rem;
  color: ${theme.dark};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Open Sans', sans-serif;
  margin-bottom: 1.25rem;
  letter-spacing: ${theme.mainSpacing};
}
p {
  margin-bottom: 1.25rem;
}
a {
  text-decoration: none;
}

main {
  flex-grow: 1 auto;
}
ul,li{
  list-style: none;
}
a{
  text-decoration: none;
}
`;

export default GlobalStyles;
