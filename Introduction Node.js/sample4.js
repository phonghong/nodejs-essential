let http = require('http');
let url = require('url');
let server = http.createServer(function(req,res){
  let parsedUrl = url.parse(req.url, true);
  let path = parsedUrl.pathname;
  res.end('Hello Node.js!\nRequest path value:' + path);
  console.log('Request received on path: '+path);
});

server.listen(3000,function(){
  console.log('The server is up at http://localhost:3000');
});
