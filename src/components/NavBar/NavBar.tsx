import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, IconButton, List, ListItem } from '@mui/material';
import { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../hooks/Context/AuthContext';
import history from '../../hooks/history';
import SearchNav from './Seach/Seach';

const NavBar = () => {
  const [open, setOpen] = useState(true);
  const [openOptions, setOpenOptions] = useState(true);
  const { handleLogout } = useContext(AuthContext);

  const menuList = ['Inicio', 'Cadastro Alunos'];
  const navBarOptions = ['Ficha', 'Anamnese', 'Tratamento', 'Historico'];
  // useEffect(() => {
  //   console.log(history.location);
  // }, []);
  const handleDrawerClose = () => {
    setOpen(true);
  };

  const handleDrawerOpen = () => {
    setOpen(false);
  };

  const handleDrawerOptions = () => {
    setOpenOptions((prev) => !prev);
  };

  const handleListItem = (e) => {
    switch (e.target.id) {
      case 'Inicio':
        history.push('/home');
        window.location.reload();

        break;
      case 'Cadastro Alunos':
        history.push('/cadastrarAluno');
        window.location.reload();
        break;
      case 'Ficha':
        history.push('/infoAlunos/ficha');
        window.location.reload();
        break;
    }
  };
  return (
    <>
      <Box
        width="100%"
        bgcolor="#195128"
        height="50px"
        display="flex"
        alignItems="center"
      >
        <Box width="60px">
          {open ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ ml: 2, ...(open ? { display: 'block' } : { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <IconButton
              color="inherit"
              aria-label="close drawer"
              onClick={handleDrawerClose}
              edge="end"
              sx={{ ml: 2, ...(!open ? { display: 'block' } : { display: 'none' }) }}
            >
              <CloseIcon />
            </IconButton>
          )}
        </Box>
        {history.location.pathname !== '/home' ? (
          <Box display="flex" width="100%" alignItems="center" justifyContent="center">
            <List
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                // flexDirection: 'column',
              }}
            >
              {navBarOptions.map((value) => (
                <ListItem key={value} sx={{ width: 'auto' }}>
                  <Button variant="text" id={value} onClick={handleListItem}>
                    {value}
                  </Button>
                </ListItem>
              ))}
            </List>
          </Box>
        ) : (
          <Box display="flex" alignItems="center" justifyContent="center" width="100%">
            <SearchNav />
          </Box>
        )}

        <Box marginRight={2}>
          <IconButton
            color="inherit"
            aria-label="close drawer"
            onClick={handleDrawerOptions}
            edge="end"
          >
            <AccountCircleIcon sx={{ height: '40px', width: '40px' }} />
          </IconButton>
        </Box>
      </Box>

      {/* Drawer Menu */}
      <Box
        width="240px"
        height="calc(100vh - 50px)"
        position="absolute"
        zIndex={100}
        bgcolor="#2c2c2c"
        display={!open ? { display: 'block' } : { display: 'none' }}
      >
        <List
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          {menuList.map((value) => (
            <ListItem key={value}>
              <Button variant="text" id={value} onClick={handleListItem}>
                {value}
              </Button>
            </ListItem>
          ))}
        </List>
      </Box>
      {/* Drawer Options User */}
      <Box
        width="90px"
        height="90px"
        position="absolute"
        right={0}
        zIndex={1}
        bgcolor="#2c2c2c"
        display={!openOptions ? { display: 'flex' } : { display: 'none' }}
        alignItems="center"
        justifyContent="center"
      >
        <Box marginBottom="5px">
          <Button variant="outlined" onClick={handleLogout}>
            sair
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default NavBar;
