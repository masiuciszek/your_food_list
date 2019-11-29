import * as React from 'react';
import Profile from '../components/auth/Profile';
import { authContext } from '../context/auth/auth.state';

interface Props {

}

const ProfilePage: React.FC<Props> = () => {
  let a;

  return (
    <>
      <Profile />
    </>
  );
};
export default ProfilePage;
