import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Login from "./components/Login";
import Chat from "./components/Chat";

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
}
