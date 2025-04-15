import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link to="/" className="navbar-brand">FaithTrack</Link>
      <div>
        <Link to="/resources" className="nav-link d-inline text-white">All Resources</Link>
        <Link to="/resources/new" className="nav-link d-inline text-white ms-3">Add Resource</Link>
      </div>
    </nav>
  );
}

export default Navbar;
