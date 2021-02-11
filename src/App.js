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
import New from './pages/New'

function App() {
  return (
    <Router>
              <Sidebar />
              <Footer />
      <div className="wrapper">
        {/* proeduces (side) navbar on every page */}
        <New />
        {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch> */}
      </div>
    </Router>
  );
}

export default App;
