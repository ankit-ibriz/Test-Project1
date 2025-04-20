// Import the HTTP module
const http = require('http');

// Define the port to run the server
const PORT = 3000;

// Create an HTTP server instance
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Send back the response
  res.end('Hello, World!\n');
});

// Start the server and listen on the defined port
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
