// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    shadow: {
      lightShadow: string;
      darkShadow: string;
      blackShadow: string;
    };

    colors: {
      secondary: string;
      blackShadow: string;
      darkishGreen: string;
      secondary: string;
      danger: string;
      offWhite: string;
      primaryColor: string;
      primaryShadow: string;
      white: string;
      offWhite2: string;
      mainBlack: string;
      dark: string;
      darkGrey: string;
      black: string;
    };
    size: {
      maxWidth: string;
      mainSpacing: string;
    };
    transition: {
      mainTransition: string;
      secondaryTransition: string;
      quickTransition: string;
    };
  }
}
