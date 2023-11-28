import React from "react";
import taikai1 from "../assets/taikai.png";

function Header() {
  return (
    <>
      <div className="headerBar">
        <nav>
          <a href="/">
            <img src={taikai1} alt="" className="image"></img>
          </a>
          <ul className="navbar-list">
            <a href="about">
              <li> About</li>
            </a>
            <a href="projects">
              <li>Projects</li>
            </a>
            <a href="skills">
              <li>Skills</li>
            </a>
            <a href="contact">
              <li>Contact</li>
            </a>
          </ul>

        </nav>
      </div>
      {/* <div>Handla's Website</div> */}
    </>
  );
}

export default Header;
