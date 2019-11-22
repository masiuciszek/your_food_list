import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Nunito:300,300i,400,400i,600,600i,700,700i&display=swap');
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
*::before,*::after,*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Nunito', sans-serif;
  color: ${props => props.theme.mainBlack};
  background: ${props => props.theme.white};
  line-height: 1.4;
  font-size: 1rem;
  height: 100%;
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
  letter-spacing: ${props =>
    // @ts-ignore
    props.theme.mainSpacing};
}
p {
  margin-bottom: 1.25rem;
}
a {
  text-decoration: none;
}
.btn-white,
.btn-primary {
  text-transform: uppercase;
  letter-spacing: ${props =>
    // @ts-ignore
    props.theme.mainSpacing};
  color: ${props => props.theme.mainWhite};
  border: 2px solid ${props => props.theme.mainWhite};
  padding: 0.9rem 1.6rem;
  display: inline-block;
  transition: ${props => props.theme.mainTransition};
  cursor: pointer;
}


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
