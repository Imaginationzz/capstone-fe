import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#022f40",
    },
    secondary: {
      main: "#fff",
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: "Poppins,sans-serif",
  },
});

export default theme;
