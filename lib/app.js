const { createServer } = require('http');
const { parse } = require('url');

const app = createServer((req, res) => {
  const url = parse(req.url);
  console.log(url.pathname);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  if(url.pathname === '/') {
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
    </head>
    <body>
      <h1>Welcome</h1>
      <nav>
        <a href="./home">Home</a>
        <a href="./red">Red</a>
        <a href="./blue">Blue</a>
        <a href="./green">Green</a>
      </nav>
      <ul>
        <li>Buddy</li>
        <li>Spot</li>
        <li>Delilah</li>
      </ul>
    </body>
    </html>`);
  } else if(url.pathname === '/red') {
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
    <h1>Red</h1>
    <nav>
        <a href="./home">Home</a>
        <a href="./red">Red</a>
        <a href="./blue">Blue</a>
        <a href="./green">Green</a>
      </nav>
    <ul>
      <li>Buddy</li>
      <li>Spot</li>
      <li>Delilah</li>
    </ul>
  </body>
  </html>`);
  } else if(url.pathname === '/blue') {
    res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
      h1 {
        color: blue;
      }
    </style>
  </head>
  <body>
    <h1>Blue</h1>
    <nav>
        <a href="./home">Home</a>
        <a href="./red">Red</a>
        <a href="./blue">Blue</a>
        <a href="./green">Green</a>
      </nav>
    <ul>
      <li>Buddy</li>
      <li>Spot</li>
      <li>Delilah</li>
    </ul>
  </body>
  </html>`);
  } else if(url.pathname === '/green') {
    res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
      h1 {
        color: green;
      }
    </style>
  </head>
  <body>
    <h1>Green</h1>
    <nav>
        <a href="./home">Home</a>
        <a href="./red">Red</a>
        <a href="./blue">Blue</a>
        <a href="./green">Green</a>
      </nav>
    <ul>
      <li>Buddy</li>
      <li>Spot</li>
      <li>Delilah</li>
    </ul>
  </body>
  </html>`);
  } else {
    res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    <h1>Not Found</h1>
    <nav>
        <a href="./home">Home</a>
        <a href="./red">Red</a>
        <a href="./blue">Blue</a>
        <a href="./green">Green</a>
      </nav>
  </body>
  </html>`);
  }
});

module.exports = app;
