import React from 'react';
import './App.css';
//allows to switch screens
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//pages (and sideNav)
import Home from './pages/Home';
import Sidebar from './components/Sidebar/Sidebar';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="wrapper">
        {/* proeduces (side) navbar on every page */}
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
