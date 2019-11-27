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

export const expand = keyframes`
 0% {
    opacity:0;
    width: 4%;
  }
  15%{
    opacity: 1;
    width: 15%;
  }
  30%{
    opacity: 1;
    width: 30%;
  }
  50%{
    opacity: 1;
    width: 50%;
  }
  75%{
    opacity: 1;
    width: 64%;
  }
  100% {
    opacity:1;
    width: 75%;
  }
`;
