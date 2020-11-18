import React from 'react';
import './style.css'

//icons for

function Github() {
  return (
    <a
      className="btn btn-outline-info border-right-0"
      href="https://github.com/jenryhennifer"
      role="button"
      target="_blank"
    >
      <img className="logo" src="./images/githublogo.png" alt="github page" />
    </a>
  );
}

function Linkedin() {
  return (
    <a
      className="btn btn-outline-info border-left-0 border-right-0"
      href="https://www.linkedin.com/in/jennifer-henry-4a540a149/"
      role="button"
      target="_blank"
    >
      <img className="logo" src="./images/linkedinlogo.png" alt="linkedIn page" />
    </a>
  );
}

function Medium() {
  <a
    className="btn btn-outline-info border-left-0 border-right-0"
    title="Medium"
    href="https://medium.com/@jenhenry1995"
    role="button"
    target="_blank"
  >
    <img className="logo" src="./images/medium.png" alt="medium blog page" />
  </a>;
}

function Resume() {
  return (
    <a
      className="btn btn-outline-info border-left-0"
      href="images/ResumeUpdated2020.pdf"
      role="button"
      target="_blank"
    >
      <img className="logo" src="./images/resumeIcon.png" alt="resume PDF" />
    </a>
  );
}

export {Github};
export {Linkedin};
export {Medium};
export {Resume};