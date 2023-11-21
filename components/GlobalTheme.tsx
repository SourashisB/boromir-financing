
import { createTheme } from '@mui/material';

var globalTheme;

export default  globalTheme = createTheme ({
  palette: {
    primary: {
      main: '#faf3ddff',
    },
    secondary: {
      main: '#102542',
    },
    background: {
      default: 'rgba(108, 169, 216, 1)',
    },
    text: {
      primary: 'rgba(0,0,0,0.79)',
      secondary: 'rgba(107, 96, 84, 1)'
    },
    warning: {
      main: '#f7a935',
    },
    info: {
      main: '#a721f3',
    },
  }
})