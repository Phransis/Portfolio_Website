import React from "react";
import taikai1 from "../assets/taikai.png";

function Header() {
  return (
    <>
      <div className="headerBar">
        <nav>
          <img src={taikai1} alt="" className="image"></img>
          <ul className="navbar-list">
            <li>About</li>
            <li>Projects</li>
            <li>Skills</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
      {/* <div>Handla's Website</div> */}

    </>
  );
}

export default Header;
