const port = 8989,
http = require("http"),
   httpStatus = require("http-status-codes");
   
   app = http.createServer((request, response) =>
    {
    console.log("Incoming request is being received");
    response.writeHead(httpStatus.OK, {
      "Content-Type" : "text/html",
    });
    let cmsg="<h1>NODE JS Server</h1> <br> <br>"
    response.write(cmsg);
    /*date and time info */
    let date_today= new Date();
    let msg2="CURRENT TIME AND DATE INFORMATION  --->"+date_today;
    response.write(msg2);
    response.end();
    console.log(`Sent a response : ${cmsg}`);
});
app.listen(port);
console.log(`The server listens to port: ${port}`);