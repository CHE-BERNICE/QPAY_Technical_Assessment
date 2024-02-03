import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

// Proxy middleware configuration
const proxyOptions = {
  target: 'http://localhost:5000', // Replace with the URL of the HTTP server with the self-signed certificate
  secure: false, // Disable SSL certificate validation
  changeOrigin: true,
};

// Create the proxy middleware
const proxy = createProxyMiddleware(proxyOptions);

// Route all requests to the proxy middleware
app.use('/', proxy);
app.use('/products', proxy);
app.use('/product/:id', proxy);
app.use('/postProducts', proxy);
app.use('/delProduct/:id', proxy);


// Start the proxy server
const port = 7000; // Choose a port for the proxy server
app.listen(port, () => {
  console.log(`Proxy server running on port ${port}`);
});


//Replace `'https://target-server.com'` with the URL of the HTTP server you want to proxy requests to. Set the `secure` option to `false` to disable SSL certificate validation.