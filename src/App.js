//librerias ó components
import "./App.css";
import "./index.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home,About, Dashboard, Parameters } from "./components/NewInput";



export default function BasicExample() {


return(

      <Router>

      <Link style={{ padding: "30px" }} to="/">Home</Link>

      <Link style={{ padding: "30px" }} to="/about">About</Link>

      <Link style={{ padding: "30px" }} to="/dashboard">Dashboard</Link>

      <Link style={{ padding: "30px" }} to="/parameters/">Parameters</Link>

      <hr />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/parameters/:id?">
          <Parameters />
        </Route>
      </Switch>

    </Router>
  );
}
