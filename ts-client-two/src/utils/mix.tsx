import uuid from 'uuid/v4';
import React from 'react';
import { Github, Facebook, Instagram } from 'styled-icons/boxicons-logos';


export const links: {id: string; path: string; text: string}[] = [
  {
    id: uuid(),
    path: '/info',
    text: 'info',
  },
  {
    id: uuid(),
    path: '/about',
    text: 'about',
  },
];


const socialIcons: {id: string; url: string; icon: any }[] = [
  { id: uuid(), url: 'https://github.com/masiuciszek', icon: <Github size="35" /> },
  { id: uuid(), url: 'https://www.instagram.com/masiuciszek/', icon: <Instagram size="35" /> },
  { id: uuid(), url: 'https://www.marcellable.com/Welcome/', icon: <Facebook size="35" /> },
];

export default socialIcons;
