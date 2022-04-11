import React from "react";
import "./Navbar.css";
import { ReactComponent as Logo } from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div>
      <header>
        <a class="logo" href="/">
          <Logo />
        </a>
        <nav>
          <ul class="nav__links">
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
        <a class="cta" href="#">
          Contact
        </a>
        <p class="menu cta">Menu</p>
      </header>
      <div class="overlay">
        <a class="close">&times;</a>
        <div class="overlay__content">
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
