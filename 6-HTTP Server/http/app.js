//Create a HTTP Server. First import the http package 
const http = require('http');
//Read content from static web pages to be displayed
const fs = require('fs');

/**Create a HTTP Server
 * method : createServer
 * arg0 : IncomingMessage -> Request from user, contains info like content-type,host id,etc
 * arg1 : ServerResponse -> The output stream for sending response from server to client
 */
const server = http.createServer((req,res)=>{
    //match particular URL pattern
    if(req.url === '/'){
        //ReadStream from static page
        let readStream = fs.createReadStream('./static/index.html');
        //Set header information for response. first argument is for response code : 200 - All good, Content-type : the type of the data sent to client in response 
        res.writeHead(200,{'Content-type' : 'text/html'});
        //Write to response output stream. res is also a writeable stream object
        //res.write("hello World");
        readStream.pipe(res);

        //end response
        // res.end();
    }
}).listen(3000); 
//Set the listeneing port for the server 