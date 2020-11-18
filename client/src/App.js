import React, { Component } from "react";
import "./App.css";
//allows to switch screens
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Description from "./pages/Description"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

function App() {
  return (
    <Router>
    <div>
      {/* proeduces navbar on every page */}
      <Nav/>
      <Switch>
        <Route exact path="/" component = { Description } />
        <Route exact path="/projects" components = { Projects } />
        <Route exact path="/contact" components = { Contact } />
      </Switch>
    </div>
    </Router>
  );
}


export default App;
