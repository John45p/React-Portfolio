import React from 'react';
import resume from "../pics/John-resume.pdf";

export default function Resume() {
  return (
    <div style={{textAlign: "center"}} className="resume-wrapper">
      <div>
        <h1>Resume</h1>
        <p className="download-resume-wrap">
          </p>
        <p>  Get my resume here <br></br>
        </p>
          <a class="resume" className="btn btn-light" style={{textDecoration: "none"}}
              href={resume}
              target="_blank"
              rel="noreferrer"
              
            >
              Resume
            </a>
      </div>
      <div>
        <h2 id="resumelist" style={{color: "black"}} className="title">Front-end</h2>
        <ul >
          <p >REACT</p>
          <p>HTML</p>
          <p>JavaScript</p>
          <p>jQuery</p>
          <p>CSS</p>
          <p>Bootstrap</p>
        </ul>
      </div>
      <div>
        <h2 className="title">Back-end</h2>
        <ul>
          <p>REST API</p>
          <p>Node.js</p>
          <p>Express.js</p>
          <p>MongoDB, Mongoose</p>
          <p>MySQL, Sequelize</p>
          <p>Insomnia</p>
          <p>GraphQL</p>
          <p>Git</p>
        </ul>
      </div>
    </div>
  );
}
