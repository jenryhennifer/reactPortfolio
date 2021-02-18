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
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <div className="wrapper">
        <div className="row">
          {/* proeduces (side) navbar on every page */}
          <div className="col-md-6">
            <Sidebar />
          </div>
          <div className="col-md-6">
            <New />
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
