import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar d-flex">
      <img className="logo" src="Img/ass-logo.png" alt="logo" />
      <button className="sec-btn">Contact Us</button>
    </div>
  );
}

export default Navbar;
