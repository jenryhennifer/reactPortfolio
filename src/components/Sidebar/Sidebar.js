import React, { Component } from 'react';
// import { Link, animateScroll as scroll } from 'react-scroll';

import './style.css';
import Icons from '../Icons/Icons';

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sideNav">
        <div>
          <ul className="sidebarList">
            <li>
              <img
                src="./images/aCoolPicOfMe.jpg"
                className="rounded-circle shadow-lg p-3 mb-4 rounded me mt-3"
                alt="Me"
              />
            </li>
            <li>
              <h2 to="/" className="text">
                Jennifer Henry
              </h2>
            </li>
            <li className="text">
              <p>San Francisco Bay Area</p>
            </li>
            <li className="text">
              <p>jenhenry1995@gmail.com</p>
            </li>
            <li className="text">
              <p>925-212-0246</p>
            </li>
            <li className="">
              <Icons />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
