// src/services/resourceService.js
const API_URL = 'http://localhost:5000/api/resources';

const handleResponse = async (res) => {
  if (!res.ok) {
    const error = await res.text();
    throw new Error(error || 'An error occurred');
  }
  return res.json();
};

const getResources = async () => {
  const res = await fetch(API_URL);
  return handleResponse(res);
};

const getResourceById = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  return handleResponse(res);
};

const createResource = async (resource) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(resource),
  });
  return handleResponse(res);
};

const updateResource = async (id, resource) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(resource),
  });
  return handleResponse(res);
};

const deleteResource = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  return handleResponse(res);
};

module.exports = {
  getResources,
  getResourceById,
  createResource,
  updateResource,
  deleteResource,
};
