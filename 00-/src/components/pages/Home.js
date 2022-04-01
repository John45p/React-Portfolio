import React from 'react';
import selfPic from '../pics/picofme1.png'

export default function Home() {
  return (
    <div className="container" className="aboutdiv" >
      <h1 class="aboutme" style={{color: "black"}}>About Me</h1>
      <img class="picofme" src ={selfPic} width="400" height="300" />
      <p id="aboutme">
      I am a web developer who is currently enrolled in a Full-Stack Web Development bootcamp at Georgia Tech.
      I am 30 years old and I have always had a fascination for computers. I'm also curious in how things work so it was a no-brainer that I went into web development.
      I now have 6 months of web development experience and counting. 
      
      </p>
    </div>
  );
}
