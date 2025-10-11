// server.js
const express = require('express');
const cors = require('cors'); // In a real app, configure CORS carefully
const app = express();
const PORT = 3001;

app.use(cors()); // For development, allow all origins

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the bundled Express backend!' });
});

app.listen(PORT, () => {
  console.log(`Express server listening on http://localhost:${PORT}`);
  // Send message to main process if running as a child process
  if (process.send) {
    process.send('Server is ready');
  }
});
