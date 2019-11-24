import uuid from 'uuid/v4';
import React from 'react';

import {
  Twitter,
  Github,
  Codepen,
  Facebook,
} from 'styled-icons/boxicons-logos';

export const links = [
  {
    id: uuid(),
    text: 'home',
    path: '/',
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
    url: '/',
    icon: <Github size="35" />,
  },
  {
    id: uuid(),
    url: '/',
    icon: <Twitter size="35" />,
  },
  {
    id: uuid(),
    url: '/',
    icon: <Codepen size="35" />,
  },
  {
    id: uuid(),
    url: '/',
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
