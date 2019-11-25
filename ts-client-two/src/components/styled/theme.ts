import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  borderRadius: '5px',
  shadow: {
    lightShadow: '2px 5px 3px 0px rgba(42, 72, 88, 0.5)',
    darkShadow: '4px 10px 5px 0px rgba(42, 72, 88, 0.5)',
  },
  colors: {
    secondary: '#23aa8f',
    blackShadow: 'rgba(0,0,0,0.5)',
    darkishGreen: '#1c6373',
    danger: '#df4230',
    offWhite: '#EDEDED',
    primaryColor: '#fafa6e',
    primaryShadow: 'rgba(250,250,110,0.6)',
    white: '#fff',
    offWhite2: '#f7f7f7',
    mainBlack: '#222',
    dark: '#2a4858',
    darkGrey: '#afafaf',
    black: '#393939',
  },
  size: {
    maxWidth: '1000px',
    mainSpacing: '4px',
  },
  transition: {
    mainTransition: 'all 0.3s linear',
    secondaryTransition: 'all 0.3s ease-in-out',
    quickTransition: 'all 200ms ease-in-out',
  },
};


export default theme;
