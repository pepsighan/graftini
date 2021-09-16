import { PaletteColor, Color, createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';

// The colors are chosen from the AI generator at https://getparade.com.

const primaryColor: PaletteColor = {
  main: '#e40046',
  light: '#ff477e',
  dark: '#c2003a',
  contrastText: '#ffffff',
};

const secondaryColor: PaletteColor = {
  main: '#00c288',
  light: '#05ffb4',
  dark: '#007f59',
  contrastText: '#ffffff',
};

const interfaceColor: Color = {
  '50': '#fcfcfc',
  '100': '#f8f7f7',
  '200': '#ebeaea',
  '300': '#dfdddd',
  '400': '#c7c2c3',
  '500': '#a7a0a2',
  '600': '#907f84',
  '700': '#766067',
  '800': '#4c333b',
  '900': '#1b0e12',
  A100: '#ebeaea',
  A200: '#c7c2c3',
  A400: '#907f84',
  A700: '#4c333b',
};

export default createTheme({
  palette: {
    primary: primaryColor,
    secondary: secondaryColor,
    grey: interfaceColor,
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        color: 'default',
        elevation: 0,
      },
      styleOverrides: {
        colorDefault: {
          backgroundColor: interfaceColor[50],
          borderBottom: '1px solid',
          borderBottomColor: interfaceColor[200],
        },
      },
    },
    MuiToolbar: {
      defaultProps: {
        variant: 'dense',
      },
    },
  },
});
