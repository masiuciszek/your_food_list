import * as React from 'react';
import { Link } from 'react-router-dom';
import { StyledProfile } from '../components/auth/Profile';
import BtnPrimary from '../components/styled/Button';

interface Props {

}

const About: React.FC<Props> = () => (
  <StyledProfile>
    <h1>About</h1>
    <p>
      Full stack MERN application built with Node js and typescript on the backend. Using Json web tokens 💪🏻
      {' '}
      <br />
      <br />
      React adn typescript on the Frontend
      {' '}
      <span>Styled component's for styling 🤟🏻😎</span>
    </p>
    <div className="btn-group">
      <Link to="/info"><BtnPrimary>Info</BtnPrimary></Link>
    </div>
  </StyledProfile>
);
export default About;
