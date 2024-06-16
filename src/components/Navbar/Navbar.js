import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar d-flex">
      <img className="logo" src="Img/ass-logo.png" alt="logo" style={{padding:'0 0 0 40px'}} />
      <button className="sec-btn" style={{margin:'0 40px 0 0',fontWeight:'600'}}>Contact Us</button>
    </nav>
  );
}

export default Navbar;
