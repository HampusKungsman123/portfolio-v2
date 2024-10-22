import React from "react";
import "./header.css";
import { NavLink, Link } from "react-router-dom";
import pdf from "../../HampusKungsmanCv.pdf";

function Header() {
  return (
    <header>
      <Link to="/" activeClassName="l">
        <h1>
          H<span id="jump">.</span>K
        </h1>
      </Link>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to={pdf} target="_blank" activeClassName="active">
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
