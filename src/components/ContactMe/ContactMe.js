import React from 'react';
import './style.css';

function ContactMe() {
  return (
    <div className="card border border-dark shadow-lg p-3 mb-5 bg-white rounded">
      <h4>Where to find me:</h4>
      <h5>Feel free to reach out to me on any of my platforms</h5>

      <ul>
        <li>
          <span role="img" aria-label="phone">
            📞
          </span>
          (925)212-0246
        </li>
        <li>
          <span role="img" aria-label="mailbox">
            📬
          </span>
          jenhenry1995@gmail.com
        </li>
      </ul>
      <a
        className="btn contact"
        href="https://github.com/jenryhennifer"
        target="_blank"
        rel="noopener"
      >
        Git Hub
      </a>
      <a
        className="btn contact"
        href="https://www.linkedin.com/in/jennifer-henry-4a540a149/"
        target="_blank"
        rel="noopener"
      >
        LinkedIn
      </a>
      <a
        className="btn contact"
        href="https://medium.com/@jenhenry1995"
        target="_blank"
        rel="noopener"
      >
        Medium
      </a>
      <a
        className="btn contact"
        href="images/jenniferhenry2021resume.pdf"
        target="_blank"
        rel="noopener"
      >
        Resume
      </a>
    </div>
  );
}

export default ContactMe;
