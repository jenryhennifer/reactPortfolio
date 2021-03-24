import React from 'react';
import './style.css';

//icons for media
//maybe change to separate components for less redundancy

function Icons() {
  return (
    <ul className="list-inline">
      <li className="list-inline-item">
        <a
          className="btn"
          href="https://github.com/jenryhennifer"
          role="button"
          target="_blank"
        >
          <img
            className="logo"
            src="./images/githublogo.png"
            alt="github page"
          />
        </a>
      </li>
      <li className="list-inline-item">
        <a
          className="btn"
          href="www.linkedin.com/in/jenniferhenry1995"
          role="button"
          target="_blank"
        >
          <img
            className="logo"
            src="./images/linkedinlogo.png"
            alt="linkedIn page"
          />
        </a>
      </li>
      <li className="list-inline-item">
        <a
          className="btn"
          title="Medium"
          href="https://medium.com/@jenhenry1995"
          role="button"
          target="_blank"
        >
          <img
            className="logo"
            src="./images/medium.png"
            alt="medium blog page"
          />
        </a>
      </li>
      <li className="list-inline-item">
        <a
          className="btn"
          href="images/jenniferhenry2021resume.pdf"
          role="button"
          target="_blank"
        >
          <img
            className="logo"
            src="./images/resumeIcon.png"
            alt="resume PDF"
          />
        </a>
      </li>
    </ul>
  );
}

export default Icons;
