import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Profile from '../components/auth/Profile';
import { authContext } from '../context/auth/auth.state';

interface Props {
  history: React.ReactNode;
}

type ProfileProp = RouteComponentProps;


const ProfilePage: React.FC<ProfileProp> = ({ history }) => {
  let a;
  const {
    isAuth, user, loading, loadUser, deleteProfile,
  } = React.useContext(authContext);

  React.useEffect(() => {
    loadUser();
    if (!isAuth) {
      history.push('/');
    }
  }, []);
  return (
    <>
      <Profile />
    </>
  );
};
export default withRouter(ProfilePage);
