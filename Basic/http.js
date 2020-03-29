const http = require('http');
const url = require('url');

const server = http.createServer(function (req, res) {
  
  var parsedUrl = url.parse(req.url, true);

  var queryObject = parsedUrl.query;

  console.log(queryObject);

  let result = 'Responsed data: ';
  result += `Category: ${queryObject.category}`;

  res.end(result);
});

server.listen(3000, function () {
  console.log('Server is listening at port 3000...');
});