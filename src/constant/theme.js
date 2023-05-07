import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "hsl(221, 34%, 55%, 1)",
      light: "hsl(221, 34%, 95%, 1)",
      dark: "hsl(221, 34%, 35%, 1)",
    },
    action: {
      active: "hsl(221, 34%, 65%, 0.5)",
      hover: "hsl(221, 34%, 65%, 0.2)",
    },
    background: { default: "hsla(0, 0%, 3%, 1)" },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "hsl(221, 34%, 45%, 1)",
      light: "hsl(221, 34%, 75%, 1)",
      dark: "hsl(221, 34%, 35%, 1)",
    },
    action: {
      active: "hsl(221, 34%, 65%, 0.5)",
      hover: "hsl(221, 34%, 65%, 0.2)",
    },
    background: { default: "hsla(216, 20%, 95%, 1)" },
  },
});
