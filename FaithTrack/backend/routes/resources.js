// routes/resources.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all resources
router.get('/', (req, res) => {
  db.query('SELECT * FROM resources', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Get resource by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM resources WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length === 0) return res.status(404).json({ error: 'Resource not found' });
    res.json(results[0]);
  });
});

// Create a resource
router.post('/', (req, res) => {
  const { title, description, category_id, scripture } = req.body;
  const sql = 'INSERT INTO resources (title, description, category_id, scripture) VALUES (?, ?, ?, ?)';
  db.query(sql, [title, description, category_id, scripture], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id: result.insertId, ...req.body });
  });
});

// Update a resource
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, description, category_id, scripture } = req.body;
  const sql = 'UPDATE resources SET title = ?, description = ?, category_id = ?, scripture = ? WHERE id = ?';
  db.query(sql, [title, description, category_id, scripture, id], (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Resource not found' });
    res.json({ message: 'Resource updated successfully' });
  });
});

// Delete a resource
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM resources WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Resource not found' });
    res.json({ message: 'Resource deleted successfully' });
  });
});

module.exports = router;
