const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8888;
const DIRECTORY = path.join(__dirname, 'out');

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
};

const server = http.createServer((req, res) => {
  let filePath = path.join(DIRECTORY, req.url);
  
  // Default to index.html for directory requests
  if (filePath.endsWith('/')) {
    filePath = path.join(filePath, 'index.html');
  }
  
  const extname = path.extname(filePath);
  const contentType = mimeTypes[extname] || 'application/octet-stream';
  
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404);
        res.end('File not found');
      } else {
        res.writeHead(500);
        res.end('Server error: ' + err.code);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`Serving files from: ${DIRECTORY}`);
  console.log('\nTry these URLs:');
  console.log(`  http://localhost:${PORT}/`);
  console.log(`  http://localhost:${PORT}/en/`);
  console.log(`  http://localhost:${PORT}/th/`);
  console.log(`  http://localhost:${PORT}/ko/`);
  console.log(`  http://localhost:${PORT}/ja/`);
  console.log(`  http://localhost:${PORT}/zh/`);
});