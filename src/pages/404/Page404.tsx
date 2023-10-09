import { Box, Button, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';

const Page404 = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <h1>Erro 404</h1>
      <p>A página que você está procurando não existe.</p>
      <p>O que fazer a seguir?</p>
      <ul>
        <li>Verifique se você digitou a URL corretamente.</li>
        <li>Tente voltar para a página anterior.</li>
        <li>Pesquise por uma página diferente.</li>
      </ul>
    </Box>
  );
};

export default Page404;
