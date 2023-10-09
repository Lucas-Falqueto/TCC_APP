import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

import history from './history';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = Cookies.get('classic-bridge');

    if (token) {
      axios.defaults.headers.Autorization = `Bearer ${token}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  async function handleLogin(email, password) {
    const response = await axios.post('http://localhost:3001/user/auth/login', {
      email: email,
      password: password,
    });

    Cookies.set('classic-bridge', response.data.token);
    axios.defaults.headers.Autorization = `Bearer ${response.data.token}`;
    setAuthenticated(true);
    history.push('/home');
    window.location.reload();
  }

  function handleLogout() {
    setAuthenticated(false);
    Cookies.remove('classic-bridge');
    axios.defaults.headers.Autorization = undefined;
    history.push('/login');
  }

  return { authenticated, loading, handleLogin, handleLogout };
}
