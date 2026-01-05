import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0B5ED7",
    },
    secondary: {
      main: "#FF9800",
    },
    text: {
      primary: "#0F172A",
    },
  },

  typography: {
    fontFamily: "Inter, Roboto, sans-serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 600 },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "10px 24px",
        },
      },
    },
  },
});

export default theme;
