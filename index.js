const { createServer } = require('http');

const server = createServer((req, res) => {
  console.log('client made a req');
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
      h1 {
        color: red;
      }
    </style>
  </head>
  <body>
    <h1>Hello There Site Visitor</h1>
  </body>
  </html>`);
});

server.listen(7890, () => {
  console.log('Listening');
});
