import React from "react";
import image from "../assets/ob_pic.jpg";

function About() {
  return (
    <div>
      <div className="intro-container">
        <div className="">
          {/* <p className="hello">Hello</p> */}
          <div className="handla">I'm Handla</div>
          <p className="hello">I'm a software engineer with years of experience</p>
        </div>
        <img src={image} alt="" className="image-con"></img>

      </div>{" "}
    </div>
  );
}

export default About;
