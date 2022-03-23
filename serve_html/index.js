/*defining http port number  */
const port = 3000,
http = require("http"),
httpStatus = require("http-status-codes");
/*Creating error Message */
const ErrorMessage = response => 
{
    response.writeHead(httpStatus.NOT_FOUND, {"Content-Type": "text/html"});
    response.write("<h1>Error Cannot get Page!</h1>");
    response.end();
}
/*if file dont exists then display error message otherwise display file content data*/
fs=require("fs")
const ReadrequestedFile=(file_path, response) => {
    if (fs.existsSync(file_path)) 
    {
        fs.readFile(file_path,(error,data)=>{
            if (error) 
            {
                console.log(error);
                ErrorMessage(response);
                return;
            }
            response.write(data);
            response.end();});
    }   
    else 
    {
        ErrorMessage(response);
    }
};

/*Routing Between diffrent pages by using if else and the extension of file */
http
   .createServer((request, response) => {
    let url =request.url;
    /*if request contains any html file extension  */
    if (url.indexOf(".html")!==-1)
    {
         response.writeHead(httpStatus.OK, { "Content-Type":"text/html"});
         /*giving full path to html files requested to function for reading file for displaying content */
         ReadrequestedFile(`./views${url}`,response);
    }   
     
    else if (url.indexOf(".html") !== -1) 
    {
        response.writeHead(httpStatus.OK, {"Content-Type":"text/html"});
        ReadrequestedFile(`./Public/js${url}`,response);
    }
    
    else if (url.indexOf(".css") !== -1) 
    {
         response.writeHead(httpStatus.OK, {"Content-Type":"text/css"});
         ReadrequestedFile(`./Public/css${url}`,response);
    }   
     
    else if (url.indexOf(".jpg") !== -1)
      {
         response.writeHead(httpStatus.OK, {"Content-Type":"image/png"});
         ReadrequestedFile(`./Public/images${url}`,response);
     }   
    /*apart from any of these file extensions show error message as response to client */
    else  
     {
        ErrorMessage(response);
     }
})
/*making server listen on port 3000  */
.listen(3000);
console.log(`Server is listening on ${port}`);
