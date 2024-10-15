const request = require('supertest');
const app = require('../src');

describe('GET /api/add/:a/:b', () => {
  it('should return the sum of two valid numbers', async () => {
    const response = await request(app).get('/api/add/5/10');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('result', 15);
  });

  it('should return null if a non-number is provided', async () => {
    const response = await request(app).get('/api/add/abc/5');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('result', null);
  });

  it('should handle negative numbers', async () => {
    const response = await request(app).get('/api/add/-5/10');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('result', 5);
  });

  it('should handle zero correctly', async () => {
    const response = await request(app).get('/api/add/0/0');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('result', 0);
  });
});
