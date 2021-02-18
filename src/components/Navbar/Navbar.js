import React from 'react';
import './Navbar.css';
import { Link } from "react-scroll";

function Navbar() {
  return (
    <ul class="nav justify-content-end">
      <li class="nav-item">
        <Link class="nav-link active" to="about" spy={true} smooth={true} offset={50} duration={500}>
          About
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" href="#">
          Projects
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" href="#">
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
