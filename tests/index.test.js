const request = require('supertest');
const express = require('express');

// Import the app
const app = express();
app.get('/', (req, res) => {
  res.json({ 
    message: 'Hello from our microservice!',
    version: '1.0.0',
    timestamp: new Date()
  });
});

describe('GET /', () => {
  it('responds with hello message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toContain('Hello');
  });
});
