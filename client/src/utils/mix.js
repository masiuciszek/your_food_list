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
  {
    id: uuid(),
    text: 'login',
    path: '/login',
  },
  {
    id: uuid(),
    text: 'register',
    path: '/register',
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
