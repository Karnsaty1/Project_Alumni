// Navbar.js
import React from 'react';
import { Link,  useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Navbar = () => {
  const { id } = useParams();

  const generateLink = (path) => {
    const uniqueId = id || uuidv4(); 
    return `/${path}/${uniqueId}`;
  };


  return (
    <nav className="navbar navbar-expand-lg sticky-navbar bg-white bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand">
          Alumni
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to={generateLink('card')}>
                Success
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={generateLink('job')}>
                Jobs
              </Link>
            </li>
           
            <li className="nav-item">
              <Link className="nav-link active" to={generateLink('donate')}>
                Donation
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={generateLink('event')}>
                CalendarView
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
