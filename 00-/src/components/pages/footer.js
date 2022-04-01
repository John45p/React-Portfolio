import React from "react";
import linkedin from "../pics/linkedin.png";
import github from "../pics/github.png";
const Footer = () => (
  <footer className="text-center text-white footer-wrapper">
    <div
      className="text-center text-dark p-3"
      style={{ "background-color": "transparent" }}
    >
      © 2022 Copyright: {` `}
      <a className="text-dark" href="#!">
        John Quintanilla
      </a>
      <br></br>
      <a  href="https://github.com/John45p" target="_blank">
        <img class="icon1" src={linkedin} />
      </a>
      <a class="icon2" href="https://www.linkedin.com/in/john-quintanilla-b06a50197/" target="_blank">
        <img class="icon1" src={github} />
      </a>
    </div>
  </footer>
);

export default Footer;
