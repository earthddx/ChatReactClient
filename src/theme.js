import { createMuiTheme } from "@material-ui/core/styles";

export const lightTheme = createMuiTheme({
  typography: {
    fontFamily: "Raleway, Open Sans",
  },
  palette: {
    type: "light",
    primary: {
      main: "#333333", //black
      text: 'white'
    },
    secondary: {
      main: "#0077FF", //darker blue
    },
  },
});

export const darkTheme = createMuiTheme({
  typography: {
    fontFamily: "Raleway, Open Sans",
  },
  palette: {
    type: "dark",
    primary: {
      main: "#B5B5B5", //grey
      text: 'black'
    },
    secondary: {
      main: "#3694FF", //lighter blue
    },
  },
});
