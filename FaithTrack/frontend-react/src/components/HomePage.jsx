import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center text-center" style={{ height: '70vh' }}>
      <h1 className="mb-3">📘 Welcome to FaithTrack</h1>
      <p className="mb-4 fs-5 text-muted">Manage and explore your faith-based resources all in one place.</p>
      <Link to="/resources" className="btn btn-primary btn-lg">View Resources</Link>
    </div>
  );
}

export default HomePage;
