//Import FileSystem module: fs
const fs = require('fs');

/**
 * Create a File or overwrite if it exists
 * method : writeFile
 * arg0 : String -> File Name
 * arg1 : String -> Content to be written
 * arg2 : callback(error) -> Handle any error 
 */
fs.writeFile('example.txt', "Hello Moto.\nGoogle Assistant.\nAlexa\nSiri",
(e) => { 
    if(e) 
        console.log("Error : " + e);
    else 
        console.log("File operation completed");
});

/**
 * Read from a file
 * method : readFile
 * arg0 : String -> File path|URL|Buffer
 * arg1 : String -> Encoding type | default: Buffer 
 * arg2 : callback(error,file) -> handle errors and get file content 
 */
fs.readFile('example.txt',"UTF-8",(err,file)=>{
    if(err)
        console.log("Error occured");
    else 
        console.log(file);
});
 