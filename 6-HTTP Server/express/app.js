//HTTP operations using the Express framework
const express = require('express');
//Path module (utitlity) to manag e file paths
const path = require('path');
//Get the body-parser module to parse form-data of request body
const body_parser = require('body-parser'); 

//express module returns an object with multiple functionalities
const app = express();
 
//Set the express node server to listen to a port
app.listen(3000);

/**Use a middleware/resource 
 * Also give an alias to the resource used by express app
 * method : use
 * arg0 : String - alias
 * arg1 : middleware function. In thius case it is method by express to use static resources 
 * --dirname : global variable (String) points to directory path
 * path.join(path_1,path_2)
 * Now we can use any resources specified by use mothod of express app
 */
app.use('/public',express.static(path.join(__dirname,'static',)));

/**Define a get route on node server
 * method : get
 * arg0 : String - Server path
 * arg1 : Calback(req,res) : Handle requests and send response
 * serving url : localhost:3000
 */
app.get("/",(req,res)=>{
    //Send normal response
    //res.send("Hello World");
    console.log(__dirname);
    
    //Send File as response 
    res.sendFile(path.join(__dirname,"static","index.html"));
});

//Another get route. Serving url : localhost:3000/example
app.get("/example",(req,res)=>{
    res.send("Hitting example route");
});

/**Query parameters with get route using route paramaters (params)
 * Mostly used when we definitely need the said parameters
 * To the used route add '/:param1/:param2/....'
 * fetch : req.params.param_name/req.params
*/
app.get("/example/:name/:age",(req,res)=>{
    console.log(req.params);
    res.send(`params : ${req.params.name}, ${req.params.age}`)
});

/**Query parameters with get route using URL rewriting (query)
 * Used to obtain optional paramaters
 * To the used route add 'route?param1=value1&param2=value2&...'
 * fetch : req.query.param_name/req.query
*/
app.get("/example1",(req,res)=>{
    console.log(req.query);
    res.send(`params : ${req.query.name}, ${req.query.age}`)
});

//Use body-parser to parse URL encoded forms. It parses the form-data and attaches it to req.body object
app.use(body_parser.urlencoded({extended: false}));

//Example login form
app.get("/login",(req,res)=>{
    
    //Send File as response 
    res.sendFile(path.join(__dirname,"static","login.html"));
});

/**Handle POST requests 
 * method : post
 * arg0 : String - url route
 * arg1 : Callback(req,res) - handle request and send response
*/
app.post("/login",(req,res)=>{
    console.log(req.body);
    res.send("Successfully login");
});