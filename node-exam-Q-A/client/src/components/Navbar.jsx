import React from "react";
import { Link } from "react-router-dom";
import "./NavbarCss.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/create-question">Ask Question</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
