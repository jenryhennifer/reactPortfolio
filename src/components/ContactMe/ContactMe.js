import React from 'react';

function ContactMe() {
  return (
    <div className="container">
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
        className="btn"
        href="https://github.com/jenryhennifer"
        target="_blank"
        rel="noopener"
      >
        Git Hub
      </a>
      <a
        className="btn"
        href="https://www.linkedin.com/in/jennifer-henry-4a540a149/"
        target="_blank"
        rel="noopener"
      >
        LinkedIn
      </a>
      <a
        className="btn"
        href="https://medium.com/@jenhenry1995"
        target="_blank"
        rel="noopener"
      >
        Medium
      </a>
      <a
        className="btn"
        href="images/resumeUpdated2021.pdf"
        target="_blank"
        rel="noopener"
      >
        Resume
      </a>
    </div>
  );
}

export default ContactMe;
