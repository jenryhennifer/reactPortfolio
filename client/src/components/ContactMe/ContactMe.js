import React from 'react';

function ContactMe() {
  return (
    <div className="container">
      <h4>Where to find me:</h4>
      <h5>Feel free to reach out to me on any of my platforms</h5>

      <ul>
        <li>📞(925)212-0246</li>
        <li>📬jenhenry1995@gmail.com</li>
        <a
          className="btn"
          href="https://github.com/jenryhennifer"
          target="_blank"
        >
          Git Hub
        </a>
        <a
          className="btn"
          href="https://www.linkedin.com/in/jennifer-henry-4a540a149/"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          className="btn"
          href="https://medium.com/@jenhenry1995"
          target="_blank"
        >
          Medium
        </a>
        <a
          className="btn"
          href="images/ResumeUpdated2020.pdf"
          target="_blank"
        >
          Resume
        </a>
      </ul>
    </div>
  );
}

export default ContactMe;
