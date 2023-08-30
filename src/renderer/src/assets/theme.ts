import { createTheme } from '@mui/material'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { green } from '@mui/material/colors'
const themeApp = createTheme({
  palette: {
    primary: {
      main: '#195128'
    },
    secondary: {
      main: green[500]
    }
  }
})

export default themeApp
