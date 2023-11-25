import React from "react";
import taikai1 from "../assets/taikai.png";

function Header() {
  return (
    <>
      <div className="headerBar">
        <nav>
          <img src={taikai1} alt="" className="image"></img>
          <ul className="navbar-list">
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              {" "}
              <a href="/projects">Projects</a>
            </li>
            <li>
              {" "}
              <a href="/skills">Skills</a>
            </li>
            <li>
              {" "}
              <a href="contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      {/* <div>Handla's Website</div> */}
    </>
  );
}

export default Header;
