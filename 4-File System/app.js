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

/**
 * Create a directory
 * method : mkdir
 * arg0 : String -> Directory Name
 * arg1 : Callback(error) -> Handle errors
 */
fs.mkdir("tutorial",(err)=>{
    if(err)
        console.log("Error : " + err );
    else 
        console.log("Directory created successfully");
});

/**
 * Delete a directory
 * method : rmdir
 * arg0 : String -> Directory Name
 * arg1 : Callback(error) -> Handle errors
 */
fs.rmdir("tutorial",(err)=>{
    if(err)
        console.log("Error : " + err );
    else 
        console.log("Directory deleted successfully");
});

/**
 * Create a file in a directory
 * method : mkdir | writeFile
 */
fs.mkdir("tutorial",(err)=>{
    if(err)
        console.log("Error : " + err );
    else{
        fs.writeFile('./tutorial/example.txt',"Hey there",(err)=>{
            if(err)
                console.log(err);
            else 
                console.log("File created successfully");
        });
    } 
});

/**
 * Get all the files from a directory and delete them
 * method : readdir| unlink
 * arg0 : String -> Directory Path
 * arg1 : Callback(err,files) -> Handle any errors and get list of file names
 */
fs.readdir("tutorial",(err,files)=>{
    if(err)
        console.log(err);
    else {
        var e = false;
        files.forEach(element => {
            for(let file of files){
                fs.unlink("./tutorial/" + file,(err)=>{
                    if(err){
                        console.log(err);
                        e = true;
                        break;
                    }
                });
            }
        });
        if(!e){
            fs.rmdir("tutorial",(err)=>{
                if(err)
                    console.log(err);
                else 
                    console.log("Directory successfully deleted");
            });
        }
    }
});


/*
Working with Streams : Readable and Writeable  (requires fs)
Streams are better used when handling large files as a single buffer may not hold all the content at once.
So it is better to operate on files in small chunks of data over multiple buffer i/o operations
*/

/**
 * Create ReadStream object (extends EventEmitter) 
 * Reads data in chunks rather than in one go
 * method : createReadStream
 * arg0 : String -> File Path
 * arg1 : String -> Encoding
 */
let readStream = fs.createReadStream("./example.txt","utf8");

/**
 * Create WriteStream Object 
 * Writes data in chunks using smaller buffers
 * method : createWriteStream
 * arg0 : String : File path
 */
let writeStream = fs.createWriteStream('./example2.txt');

//Read content from one file and copy to another
readStream.on("data",(chunk)=>{
    writeStream.write(chunk);
});

//Directly do the above operation using pipe
readStream.pipe(writeStream);