import ReactDOM from 'react-dom/client'

import App from './App'

import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import './assets/index.css'
import themeApp from './assets/theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={themeApp}>
    <CssBaseline />
    <App />
  </ThemeProvider>
)
