import React from 'react';
import './App.css';
//allows to switch screens
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//pages (and sideNav)
import Home from './pages/Home';
import Sidebar from './components/Sidebar/Sidebar';
import ProjectPage from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer/Footer';
import New from './pages/New';

function App() {
  return (
    <Router>
      <div className="wrapper">
        {/* proeduces (side) navbar on every page */}
        <Sidebar className="col-sm-4" />
        <Footer />
        <div className="wrapper col-sm-8">
          <New />
        </div>
      </div>
    </Router>
  );
}

export default App;
