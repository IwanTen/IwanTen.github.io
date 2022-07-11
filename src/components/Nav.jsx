import React from "react";
import { Link, NavLink } from "react-router-dom";
import linkedIn from "../assets/linkedin-filled.svg";

function Nav() {
  return (
    <nav>
      <h3 className="logo">Iwan Traeger-Payne</h3>
      <a
        className="socials"
        href="http://linkedin.com/in/iwan-traeger-payne-8b93ba198"
      >
        <img src={linkedIn} alt="LinkedIn Logo"></img>
      </a>
      <div className="links">
        <NavLink className="link" to="/">
          Home
        </NavLink>
        <NavLink className="link" to="/about">
          About
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;
