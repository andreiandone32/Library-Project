import { createTheme, makeStyles, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#AA77FF",
    },
  },
});


export default function ({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}