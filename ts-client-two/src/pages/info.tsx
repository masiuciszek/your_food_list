import * as React from 'react';
import { Link } from 'react-router-dom';
import { StyledProfile } from '../components/auth/Profile';
import BtnPrimary from '../components/styled/Button';

interface Props {

}

const Info: React.FC<Props> = () => (
  <>
    <StyledProfile>
      <h1>Information </h1>
      <p>
      But we’ve met before. That was a long time ago, I was a kid at St. Swithin’s, It used to be funded by the Wayne Foundation. It’s an orphanage. My mum died when I was small, it was a car accident. I don’t remember it. My dad got shot a couple of years later for a gambling debt. Oh I remember that one just fine. Not a lot of people know what it feels like to be angry in your bones. I mean they understand. The fosters parents. Everybody understands, for a while. Then they want the angry little kid to do something he knows he can’t do, move on. After a while they stop understanding. They send the angry kid to a boy’s home, I figured it out too late. Yeah I learned to hide the anger, and practice smiling in the mirror. It’s like putting on a mask. So you showed up this one day, in a cool car, pretty girl on your arm. We were so excited! Bruce Wayne, a billionaire orphan? We used to make up stories about you man, legends and you know with the other kids, that’s all it was, just stories, but right when I saw you, I knew who you really were.
        <br />
        <br />
        {' '}
I’d seen that look on your face before. It’s the same one I taught myself. I don’t why you took the fault for Dent’s murder but I’m still a believer in the Batman. Even if you’re not…💪🏻
        {' '}

      </p>
      <div className="btn-group">
        <Link to="/about"><BtnPrimary>About</BtnPrimary></Link>
      </div>
    </StyledProfile>
  </>
);
export default Info;
