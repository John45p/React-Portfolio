import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul  className="nav nav-tabs">
      <h1 id="myname" style={{color: "black"}}>John Quintanilla</h1>
      <li style={{paddingLeft: "85px"}} className="nav-item">
        <a style={{color: "black"}}
          href="#home"
          onClick={() => handlePageChange('Home')}

          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li  className="nav-item">
        <a style={{color: "black"}}
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}

          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a style={{color: "black"}}
          href="#contact"
          onClick={() => handlePageChange('Contact')}

          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a style={{color: "black"}}
          href="#resume"

          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
