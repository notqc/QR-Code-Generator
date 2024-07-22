const http = require('http');
const fs = require('fs');
const path = require('path');
const qr = require('qr-image');

const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading index.html');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else if (req.url.startsWith('/qr') && req.method === 'GET') {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const qrUrl = url.searchParams.get('url');

    if (qrUrl) {
      const qrImage = qr.image(qrUrl, { type: 'png' });
      res.writeHead(200, { 'Content-Type': 'image/png' });
      qrImage.pipe(res);
    } else {
      res.writeHead(400);
      res.end('URL parameter is missing');
    }
  } else if (req.url.endsWith('.css') || req.url.endsWith('.js')) {
    const ext = path.extname(req.url).slice(1);
    const mimeType = {
      'css': 'text/css',
      'js': 'application/javascript'
    }[ext] || 'text/plain';

    fs.readFile(path.join(__dirname, 'public', req.url), (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('File not found');
        return;
      }
      res.writeHead(200, { 'Content-Type': mimeType });
      res.end(data);
    });
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
