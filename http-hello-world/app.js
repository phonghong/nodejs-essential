
var http = require('http');

http.createServer(function(req, res){
    res.end('Hello World\n');
}).listen(3000);

console.log('Server running at http://localhost:3000/');
