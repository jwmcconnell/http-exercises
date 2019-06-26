const request = require('supertest');
const app = require('../lib/app');

describe('application routes', () => {
  it('returns a list of dogs', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual(expect.stringContaining('<li>Buddy</li>'));
      });
  });

  it('returns a page with the header Welcome', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.text).toEqual(expect.stringContaining('<h1>Welcome</h1>'));
      });
  });

  it('returns a page with the header Blue', () => {
    return request(app)
      .get('/blue')
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.text).toEqual(expect.stringContaining('<h1>Blue</h1>'));
      });
  });

  it('returns a page with the header Red', () => {
    return request(app)
      .get('/red')
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.text).toEqual(expect.stringContaining('<h1>Red</h1>'));
      });
  });

  it('returns a page with the header Green', () => {
    return request(app)
      .get('/green')
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.text).toEqual(expect.stringContaining('<h1>Green</h1>'));
      });
  });

  it('returns a page with the header Not Found', () => {
    return request(app)
      .get('/asfd')
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.text).toEqual(expect.stringContaining('<h1>Not Found</h1>'));
      });
  });
});
