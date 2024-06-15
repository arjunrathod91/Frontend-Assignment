import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar d-flex">
      <img className="logo" src="Img/ass-logo.png" alt="logo" style={{padding:'0 20px'}} />
      <button className="sec-btn" style={{margin:'0 20px'}}>Contact Us</button>
    </div>
  );
}

export default Navbar;
