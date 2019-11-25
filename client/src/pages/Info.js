import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { StyledBtn } from '../components/styled/Buttons';
import { StyledAbout } from './About';

const Info = () => (
  <StyledAbout>
    <h1> This is the information page</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam beatae cum
      esse dignissimos quas, obcaecati repudiandae, sunt aut molestias
      distinctio tempore maxime recusandae labore quidem quam. Consectetur
      dicta, cumque est ea in expedita, exercitationem repellat mollitia animi
      quo reiciendis. Eos aliquam perspiciatis accusamus eaque quis cupiditate
      dicta excepturi laborum odit!
    </p>
    <Link to="/">
      <StyledBtn>← λ Return</StyledBtn>
    </Link>
  </StyledAbout>
);

Info.propTypes = {};

export default Info;
