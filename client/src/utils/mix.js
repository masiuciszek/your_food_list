import uuid from 'uuid/v4';
import React from 'react';
import { keyframes } from 'styled-components';

import {
  Twitter,
  Github,
  Codepen,
  Facebook,
} from 'styled-icons/boxicons-logos';

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

export const links = [
  {
    id: uuid(),
    text: 'info',
    path: '/info',
  },
  {
    id: uuid(),
    text: 'about',
    path: '/about',
  },
];

export const iconsList = [
  {
    id: uuid(),
    url: 'https://github.com/masiuciszek',
    icon: <Github size="35" />,
  },
  {
    id: uuid(),
    url: 'https://twitter.com/CiszekMarcell',
    icon: <Twitter size="35" />,
  },
  {
    id: uuid(),
    url: 'https://codepen.io/legionista1994',
    icon: <Codepen size="35" />,
  },
  {
    id: uuid(),
    url: 'https://www.marcellable.com/',
    icon: <Facebook size="35" />,
  },
];

// .grid-2-3 {
//   display: grid;
//   grid-template-columns: 2fr 3fr;
//   grid-gap: 2rem;
// }

/* Grid */
// .grid-2 {
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   grid-gap: 2rem;
// }

// .grid-3 {
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   grid-gap: 1rem;
// }

// .grid-4 {
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   grid-gap: 2rem;
// }
