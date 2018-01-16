var http = require('http');
var fs = require('fs')
var server = http.createServer();


server.on('request', function(request, response) {
  response.setHeader("Content-Type", "text/html; charset=utf-8");
  if (request.method === 'GET' && request.url === '/page') {
    fs.readFile('./index.html', 'utf-8', function(err, data) {
      if (err) throw err;
      console.log("Request received.");
      response.write(data);
      response.end();
    });

  } else {
    response.statusCode = 404;
    response.write('<h1>404: Ups... You know nothing Jon Snow.</h1>');
    response.end();
  }
});


server.listen(9000);