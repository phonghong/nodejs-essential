const http = require('http');
const url = require('url');

const server = http.createServer(function(req,res) {

  var parsedUrl = url.parse(req.url, true);

  var queryObject = parsedUrl.query;

  console.log(req.url);

  console.log(parsedUrl.query);

  let result = `Your request product:`;

  for(let key in queryObject) {
    var value = queryObject[key];
    let currItem = `${key}: ${value}`;
    result += `\n ${currItem}`;
  }

  res.end(result);
});

server.listen(3000, function(err) {
  if (err) {
    process.exit(1);
  }

  console.log('Server is listening on port 3000...');
})

