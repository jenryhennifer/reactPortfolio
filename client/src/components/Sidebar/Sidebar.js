import React from 'react';
import './style.css';
import Icons from '../Icons/Icons';

function Sidebar() {
  return (
    <div className="sideNav">
      <div>

        <ul>
          <li>        <img
          src="./images/aCoolPicOfMe.jpg"
          className="rounded-circle shadow-lg p-3 mb-4 rounded me mt-3"
          alt="Me"
        /></li>
          <li>
            <h2 href="/">Jennifer Henry</h2>
          </li>
          <li className='text'>
            <p>San Francisco Bay Area</p>
          </li>
          <li className='text'>
            <p>jenhenry1995@gmail.com</p>
          </li>
          <li className='text'>
            <p>925-212-0246</p>
          </li>
          <li className='text'>
            <a href="/">About</a>
          </li>
          <li className='text'>
            <a href="/"> Projects </a>
          </li>
          <li className='text'>
            <a href="/"> Contact </a>
          </li>
          <li className="ml-5">
            <Icons />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
