const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  let filePath = './404.html';

  if (req.url === '/' || req.url === '/index.html') {
    filePath = './index.html';
  } else if (req.url === '/about') {
    filePath = './about.html';
  } else if (req.url === '/contact-me') {
    filePath = './contact-me.html';
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end('File not found');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    }
  });
});

const port = 8080;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
