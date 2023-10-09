import { Box, Button, TextField } from '@mui/material';
import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../hooks/Context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassoword] = useState('');

  const { authenticated, handleLogin } = useContext(AuthContext);

  const onClickLogin = async () => {
    if (email === '' || password === '') window.location.reload();
    handleLogin(email, password);
    console.log(authenticated);
  };

  const handleEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handlePassword = (e) => {
    const { value } = e.target;
    setPassoword(value);
  };

  return (
    <>
      {/* <h1>Page Login</h1> */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="80vh"
        flexDirection="column"
        gap={2}
      >
        <Box display="flex" flexDirection="column" width={400} gap={2}>
          <TextField label="Email" variant="outlined" onChange={handleEmail} />
          <TextField
            label="Senha"
            variant="outlined"
            type="password"
            onChange={handlePassword}
          />
        </Box>
        <Button variant="outlined" onClick={onClickLogin}>
          entrar
        </Button>
      </Box>
    </>
  );
};

export default Login;
