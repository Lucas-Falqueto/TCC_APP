import { Toolbar } from '@mui/material'
import { AppBar } from '../../components/AppBar/AppBar'
import DrawerBar from '../../components/Drawer/DrawerBar'
import SearchBar from '../../components/Search/SearchBar'

const Home = () => {
  return (
    <AppBar>
      <Toolbar>
        <DrawerBar></DrawerBar>
        <SearchBar />
      </Toolbar>
    </AppBar>
  )
}

export default Home
