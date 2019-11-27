/* eslint-disable import/prefer-default-export */

import { keyframes } from 'styled-components';

export const fadeDown = keyframes`
 0% {
    opacity:0;
    transform:  translate(0px,-25px)  ;
  }
  100% {
    opacity:1;
    transform:  translate(0px,0px)  ;
  }
`;
