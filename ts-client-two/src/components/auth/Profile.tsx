import * as React from 'react';
import { authContext } from '../../context/auth/auth.state';

interface Props {

}

const Profile: React.FC<Props> = () => {
  const { isAuth, user, loading } = React.useContext(authContext);
  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
};
export default Profile;
