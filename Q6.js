const http = require('http');

// Sample product data
const menProducts = [
  { id: 1, name: 'Men Product 1' },
  { id: 2, name: 'Men Product 2' },
  // Add more product objects here
];

const womenProducts = [
  { id: 1, name: 'Women Product 1' },
  { id: 2, name: 'Women Product 2' },
  // Add more product objects here
];

const server = http.createServer((req, res) => {
  // Root endpoint
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to Men & Women Dummy Data');
  }
  // Endpoint for men products
  else if (req.url === '/men') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(menProducts));
  }
  // Endpoint for women products
  else if (req.url === '/women') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(womenProducts));
  }
  // Endpoint for other routes
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
