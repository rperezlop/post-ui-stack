import {createTheme} from '@mui/material/styles';
import {blueGrey, orange, lightBlue, green, deepPurple, brown, teal, blue} from '@mui/material/colors';
import {regular, bold} from './fonts';

const theme = createTheme({
  palette: {
    primary: {
      light: teal[100],
      main: teal[500],
      dark: teal[800],
      contrastText: '#FFFFFF',
      veryLight: blueGrey['A100'],
    },
    secondary: {
      light: teal[100],
      main: teal[500],
      dark: teal[800],
      contrastText: '#FFFFFF',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#FFFFFF',
    },
    info: {
      main: lightBlue[700], // lightBlue[400] in "dark" mode
      light: lightBlue[500], // lightBlue[300] in "dark" mode
      dark: lightBlue[900], // lightBlue[700] in "dark" mode
    },
    success: {
      main: green[800], // green[400] in "dark" mode
      light: green[500], // green[300] in "dark" mode
      dark: green[900], // green[700] in "dark" mode
    },
    warning: {
      main: orange[400], // orange[400] in "dark" mode
      light: orange[500], // orange[300] in "dark" mode
      dark: orange[900], // orange[700] in "dark" mode
    },

    degradado: {
      background: 'linear-gradient(to bottom right, green, white)'
    },

    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121'
    },
    black: {
      700: '#555555',
      800: '#252525',
      900: '#1e1e1e'
    },

    red: '#FF0000',
    pink: '#C84091',

    common: {
      white: '#FFFFFF',
      black: '#212121',
      pink: '#e91e63',
    },
  },
  font: {
    dark: '#263238'
  },
  spacing: (factor) => factor * 12,

  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [regular, bold],
      },
    },
  },
});

export default theme;
