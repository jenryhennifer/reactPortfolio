import React from 'react';
import './style.css';
import Github from '../Icons/Icons'

function Sidebar() {
  return (
      <div className="sideNav">
        <img
          src="./images/aCoolPicOfMe.jpg"
          className="rounded-circle shadow-lg p-3 mb-5 rounded"
          alt="Me"
        />
        <ul>
          <li><h2 href="/">Jennifer Henry</h2></li>
          <li><p>San Francisco Bay Area</p></li>
          <li><p>jenhenry1995@gmail.com</p></li>
          <li><a href="/">About</a></li>
          <li><a href="/"> Projects </a></li>
          <li><Github/></li>
        </ul>
      </div>
  );
}

export default Sidebar;
