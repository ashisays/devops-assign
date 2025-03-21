const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ 
    message: 'Hello from our microservice!',
    version: '1.0.0',
    timestamp: new Date()
  });
});

app.listen(port, () => {
  console.log();
});

// Health endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'UP' });
});
// TODO: Add metrics endpoint
