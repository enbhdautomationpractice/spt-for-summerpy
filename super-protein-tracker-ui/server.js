// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const proxy = require('express-http-proxy');
const cors = require('cors');

const app = express();

// Parsers for POST data
app.use(bodyParser.json({limit: '20mb'}));
app.use(bodyParser.urlencoded({ extended: false, limit: '20mb' }));

app.use(cors());

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist/super-protein-tracker-ui')));

const serverProxyAddress = process.env.SERVER_PROXY_ADDRESS || 'http://localhost:8085'
console.log("Using backend ", serverProxyAddress);
// Set our api routes proxy to point to spring boot server
app.use('/server', proxy(serverProxyAddress));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/super-protein-tracker-ui/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = '8081';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on ${port}`));
