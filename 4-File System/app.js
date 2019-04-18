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
 
/**
 * Rename a file
 * method : rename
 * arg0 : String -> Old Path
 * arg1 : String -> New Path
 * arg2 : Callback(error) -> Handle errors
 */
fs.rename("example.txt","example2.txt",(err)=>{
    if(err)
        console.log("Error : " + err );
    else 
        console.log("File renamed successfully");
});

/**
 * Append content to the end of file
 * method : appendFile
 * arg0 : String -> File path
 * arg1 : String -> Content to be appended
 * arg2 : Callback(error) -> Handle errors
 */
fs.appendFile("example2.txt","\nWatson",(err)=>{
    if(err)
        console.log("Error : " + err );
    else 
        console.log("Append successful");
});

/**
 * Delete a file
 * method : unlink
 * arg0 : String -> File path
 * arg1 : Callback(error) -> Handle errors
 */
fs.unlink("example2.txt",(err)=>{
    if(err)
        console.log("Error : " + err );
    else 
        console.log("File deleted successfully");
});