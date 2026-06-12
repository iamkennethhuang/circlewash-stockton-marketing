import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#d71920',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#075bff',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#050505',
      secondary: '#3d3d3d',
    },
  },
  typography: {
    fontFamily: ['Inter', 'Arial', 'Helvetica', 'sans-serif'].join(','),
    h1: {
      fontWeight: 900,
      letterSpacing: 0,
    },
    h2: {
      fontWeight: 900,
      letterSpacing: 0,
    },
    h3: {
      fontWeight: 900,
      letterSpacing: 0,
    },
    button: {
      fontWeight: 800,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
