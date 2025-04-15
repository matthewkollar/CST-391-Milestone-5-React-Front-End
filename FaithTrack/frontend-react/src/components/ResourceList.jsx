import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import resourceService from '../services/resourceService.jsx';


function ResourceList() {
  const [resources, setResources] = useState([]);

  const loadResources = async () => {
    try {
      const data = await resourceService.getResources();
      setResources(data);
    } catch (err) {
      console.error('Error loading resources:', err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this resource?')) {
      try {
        await resourceService.deleteResource(id);
        loadResources(); // refresh the list
      } catch (err) {
        console.error('Delete failed:', err);
      }
    }
  };

  useEffect(() => {
    loadResources();
  }, []);

  return (
    <div>
      <h2>All Resources</h2>
      {resources.length === 0 ? (
        <p>No resources found.</p>
      ) : (
        <table className="table table-bordered mt-3">
          <thead className="table-dark">
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Category ID</th>
              <th>Scripture</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {resources.map((res) => (
              <tr key={res.id}>
                <td>{res.title}</td>
                <td>{res.description}</td>
                <td>{res.category_id}</td>
                <td>{res.scripture}</td>
                <td>
                  <Link
                    to={`/resources/edit/${res.id}`}
                    className="btn btn-sm btn-warning me-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(res.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ResourceList;
