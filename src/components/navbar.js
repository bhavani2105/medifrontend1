import React from "react";
import { Link } from "react-router-dom";
import logoImg from "./logoImg.jpg";

function Navbar() {
  return (
    <div className="body">
      <div className="navbar-container">
        <header>
          <img id="logoimg" src={logoImg} alt="logo" />
          <h1 id="title">MediMap</h1>
        </header>

        <nav className="navbar-set">
          <ul>
            <li className="link" style={{ color: "red" }}>
              <Link to="/">Home </Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
            <li>
              <Link to="/Register">Register</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/notFound">NotFound</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
