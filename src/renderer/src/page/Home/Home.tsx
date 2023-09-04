/* eslint-disable @typescript-eslint/no-unused-vars */
import { Avatar, Box, Toolbar } from '@mui/material'
import { AppBar } from '../../components/AppBar/AppBar'
import DrawerBar from '../../components/Drawer/DrawerBar'
import SearchBar from '../../components/Search/SearchBar'
import HomeBody from '@renderer/components/CardBody/HomeBody/HomeBody'
import { useState } from 'react'

const Home = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <AppBar>
        <Toolbar>
          <Box width="10%">
            <DrawerBar open={open} setOpen={setOpen} />
          </Box>
          <Box width="80%" display="flex" justifyContent="center">
            <Box>
              <SearchBar />
            </Box>
            <Box left={763} position="relative">
              <Avatar>H</Avatar>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box position="relative" width="100%" left={!open ? 0 : 244} top={100}>
        <HomeBody />
      </Box>
    </>
  )
}

export default Home
