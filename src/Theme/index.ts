import { createTheme } from '@mui/material';
import palette from "./palette"
import components from "./components"

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1400,
    },
  },

  palette,
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    fontSize: 14,
    h1: {
      fontSize: 28,
    },
    h2: {
      fontSize: 26,
    },
    h3: {
      fontSize: 24,
    },
    h4: {
      fontSize: 22,
    },
    h5: {
      fontSize: 20,
    },
    h6: {
      fontSize: 18,
    },
    body1: {
      fontSize: 17,
    },
    body2: {
      fontSize: 16,
    },
  },

  spacing: 2,
  shape: {
    borderRadius: 4,
  },
  components,
  unstable_sxConfig: {},
  mixins: {},
});

export default theme;