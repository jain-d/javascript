const http = require("http");
const server = http.createServer((req, res) => {
   res.writeHead(200);
   res.end(`
<!DOCTYPE html>
<html>
<h2>Hello from Server</h2>
<p>this is just a test</p>
<html>
`);
});

server.listen((4700), () => {
   console.log("server is running");
});
