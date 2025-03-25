// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const resourceRoutes = require('./routes/resources');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/resources', resourceRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
