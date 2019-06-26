const { createServer } = require('http');

const server = createServer((req, res) => {
  console.log('client made a req');
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('hi there');
});

server.listen(7890, () => {
  console.log('Listening');
});
