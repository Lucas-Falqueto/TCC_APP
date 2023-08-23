import { styled, AppBar as MuiAppBar, AppBarProps as MuiAppBarProps } from '@mui/material'

const appBarWidth = 240

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}
export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: appBarWidth,
    width: `calc(100% - ${appBarWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}))
