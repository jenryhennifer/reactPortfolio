import React from 'react';
import './App.css';
//allows to switch screens
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/Home';
import Sidebar from './components/Sidebar/Sidebar'
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div>
        {/* proeduces navbar on every page */}
        <Sidebar/>
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          {/* <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
