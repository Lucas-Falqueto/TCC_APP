import { useState } from 'react'
import { Avatar, Button, TextField, Box, Container, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Link } from 'react-router-dom'

const Login = () => {
  const [emailValue, setEmailValue] = useState()
  const [passwordValue, setPasswordValue] = useState()

  const onChangeEmail = (e) => {
    const value = e.target.value
    setEmailValue(value)
    console.log(`Email ${value}`)
  }

  const onChangePassword = (e) => {
    const value = e.target.value
    setPasswordValue(value)
    console.log(`Senha ${value}`)
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={onChangeEmail}
            value={emailValue}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={onChangePassword}
            value={passwordValue}
            autoComplete="current-password"
          />
          <Button
            onClick={(e) => e.preventDefault()}
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>
              Login
            </Link>
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default Login
