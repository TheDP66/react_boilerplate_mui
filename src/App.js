import CloseIcon from "@mui/icons-material/Close";
import { CssBaseline, IconButton, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { SnackbarProvider, useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import { lightTheme } from "./constant/theme";
import Home from "./pages/home/home";
import PrivateRouter from "./routes/PrivateRouter";
import PageRender from "./routes/PageRender";

import "./index.css";

function App() {
  const [theme, setTheme] = useState(lightTheme);
  const { i18n } = useTranslation();

  const SnackbarCloseButton = ({ snackbarKey }) => {
    const { closeSnackbar } = useSnackbar();

    return (
      <IconButton onClick={() => closeSnackbar(snackbarKey)}>
        <CloseIcon sx={{ color: "white" }} />
      </IconButton>
    );
  };

  return (
    <LocalizationProvider
      dateAdapter={AdapterMoment}
      adapterLocale={i18n.language}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider
          maxSnack={3}
          action={(snackbarKey) => (
            <SnackbarCloseButton snackbarKey={snackbarKey} />
          )}
        >
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />

              <Route exact path="/" element={<PrivateRouter />}>
                <Route exact path="/:page" element={<PageRender />} />
              </Route>

              <Route exact path="/" element={<PrivateRouter />}>
                <Route exact path="/:page/:id" element={<PageRender />} />
              </Route>
            </Routes>
          </Router>
        </SnackbarProvider>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
