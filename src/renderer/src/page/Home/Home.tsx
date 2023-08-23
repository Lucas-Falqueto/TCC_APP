import { useState } from 'react'
import {
  Box,
  Toolbar,
  Divider,
  Typography,
  IconButton,
  Badge,
  Container,
  Grid
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { AppBar } from '../../components/AppBar/AppBar'
import { Drawer } from '../../components/Drawer/Drawer'
import { Link } from 'react-router-dom'

// TODO remove, this demo shouldn't need to reset the theme.
const Home = () => {
  const [open, setOpen] = useState(true)
  const toggleDrawer = () => {
    setOpen(!open)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="absolute" open={open}>
        <Toolbar
          sx={{
            pr: '24px' // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' })
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Home_Test
          </Typography>
          <IconButton color="inherit">
            <Badge color="secondary">
              <Link to="/Tratamento" style={{ textDecoration: 'none', color: 'white' }}>
                <AccountCircleIcon />
              </Link>
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1]
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto'
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}></Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default Home
