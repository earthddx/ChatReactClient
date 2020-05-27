import React, { useState } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { lightTheme, darkTheme } from "./theme";

import Toggle from "./components/Toggle";
import Login from "./components/Login";
import Chat from "./components/Chat";

export default function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <MuiThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <CssBaseline />
      <Toggle theme={theme} toggleTheme={toggleTheme} />
      <Router>
        <Route exact path="/" component={Login} />
        <Route path="/chat" component={Chat} />
      </Router>
    </MuiThemeProvider>
  );
}
