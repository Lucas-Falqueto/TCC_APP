import { Box, Button, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';

import { AuthContext } from '../../hooks/Context/AuthContext';

const Home = () => {
  const { authenticated, handleLogout } = useContext(AuthContext);
  return (
    <>
      {/* <h1>Page Home</h1> */}
      <Box>Home</Box>
      <Button variant="outlined" onClick={handleLogout}>
        sair
      </Button>
    </>
  );
};

export default Home;
