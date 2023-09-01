import { Box, Toolbar } from '@mui/material'
import { AppBar } from '../../components/AppBar/AppBar'
import DrawerBar from '../../components/Drawer/DrawerBar'
import SearchBar from '../../components/Search/SearchBar'

const Home = () => {
  return (
    <AppBar>
      <Toolbar>
        <Box width="10%">
          <DrawerBar />
        </Box>
        <Box width="80%" display="flex" justifyContent="center">
          <SearchBar />
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Home
