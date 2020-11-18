import React from 'react';
import './App.css';
//allows to switch screens
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Description from './pages/Description';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div>
        {/* proeduces navbar on every page */}
        <Nav />
        <Switch>
          <Route exact path="/">
            <Description />
          </Route>
          <Route exact path="/projects">
            <Projects/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
