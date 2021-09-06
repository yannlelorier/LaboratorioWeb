//librerias ó components
import "./App.css";
import "./index.css";
import React from "react";
import {
  //BrowserRouter as Router, lo usamos en index.js
  // Switch, usamos useHistory
  Route,
  useHistory
  // Link usamos useHistory
} from "react-router-dom";
import { Home,About, Dashboard, Parameters } from "./components/NewInput";



export default function BasicExample() {

  const history = useHistory();

  const handleHome = () => {
    history.push("/");
  };
  
  const handleAbout = () => {
    history.push("/about")
  };

  const handledashboard = () => {
    history.push("/dashboard");
  };

  const handleParams = () => {
    history.push("/parameters");
  }


return(
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/parameters/:id?" component={Parameters} />
    <button onClick={handleHome}>Home</button>
    <button onClick={handleAbout}>About</button>
    <button onClick={handledashboard}>Dashboard</button>
    <button onClick={handleParams}>Parameters</button>
  </div>

      // <Router>

      // <Link style={{ padding: "30px" }} to="/">Home</Link>

      // <Link style={{ padding: "30px" }} to="/about">About</Link>

      // <Link style={{ padding: "30px" }} to="/dashboard">Dashboard</Link>

      // <Link style={{ padding: "30px" }} to="/parameters">Parameters</Link>

      // <hr />

      // <Switch>
      //   <Route exact path="/">
      //     <Home />
      //   </Route>
      //   <Route path="/about">
      //     <About />
      //   </Route>
      //   <Route path="/dashboard">
      //     <Dashboard />
      //   </Route>
      //   <Route path="/parameters/:id?">
      //     <Parameters />
      //   </Route>
      // </Switch>
  );
}
