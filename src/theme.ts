import { createTheme } from "@material-ui/core";

const theme = createTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#8e24aa',
        dark: '#ffebee',
      },
      secondary: {
        main: '#ffee58',
      },
      background: {
        default: '#191a21',
        paper: '#272a35',
      },
    },
    typography: {
      fontFamily: 'Helvetica',
      fontSize: 15,
    },
  });
  
  export default theme;