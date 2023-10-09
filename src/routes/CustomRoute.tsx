import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { AuthContext } from '../hooks/Context/AuthContext';

export default function CustomRoute({ isPrivate, ...rest }) {
  const { loading, authenticated } = useContext(AuthContext);

  if (loading) {
    return (
      <>
        <h1>Loding</h1>
      </>
    );
  }

  if (isPrivate && !authenticated) {
    return <Redirect to="/login" />;
  }

  return <Route {...rest} />;
}
