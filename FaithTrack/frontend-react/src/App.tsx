import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import HomePage from './components/HomePage.jsx';
import ResourceList from './components/ResourceList.jsx';
import AddResource from './components/AddResource.jsx';
import EditResource from './components/EditResource.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resources" element={<ResourceList />} />
          <Route path="/resources/new" element={<AddResource />} />
          <Route path="/resources/edit/:id" element={<EditResource />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
