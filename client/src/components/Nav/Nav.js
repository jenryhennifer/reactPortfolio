import React from 'react';

function Nav() {
  return (
    <ul class="nav justify-content-end">
      <li class="nav-item">
        <a class="nav-link active" href="/">
          Jennifer Henry
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/about">
          About
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="contact">
          Constact Me
        </a>
      </li>
    </ul>
  );
}

export default Nav;
