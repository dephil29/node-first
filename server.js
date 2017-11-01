const http = require("http");

http.createServer((request, response) => {
  request.on("error", err => {
    console.log(err);
    response.statusCode = 400;
    response.end();
  });

  response.on("error", err => {
    console.log(err);
  });

  if(request.method === "GET")
  }).listen(8080, () => console.log("Running on localhost"));
