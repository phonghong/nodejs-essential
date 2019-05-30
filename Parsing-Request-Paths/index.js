/*
 * Primary file for API
 *
 */

// Dependencies
let http = require('http');
let url = require('url');

 // Configure the server to respond to all requests with a string
let server = http.createServer(function(req,res){

  // Parse the url
  let parsedUrl = url.parse(req.url, true);

  // Get the path
  let path = parsedUrl.pathname;
  let trimmedPath = path.replace(/^\/+|\/+$/g, '');

  // Send the response
  res.end('Hello Node.js!\nRequest path value:' + trimmedPath);

  // Log the request/response
  console.log('Request received on path: '+trimmedPath);
});

// Start the server
server.listen(3000,function(){
  console.log('The server is up and running now');
});
