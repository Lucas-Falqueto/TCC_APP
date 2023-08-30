import { Toolbar } from '@mui/material'
import { AppBar } from '../../components/AppBar/AppBar'
import DrawerBar from '../../components/Drawer/DrawerBar'

const Home = () => {
  return (
    <AppBar>
      <Toolbar>
        <DrawerBar></DrawerBar>
      </Toolbar>
    </AppBar>
  )
}

export default Home
