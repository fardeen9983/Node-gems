//Compression Example

//zlib package used for compression of files
const zlib = require('zlib');
const fs = require('fs');

//Readable and Writebale Stream objects
let readStream = fs.createReadStream('example.txt','utf8');
//*.gz files are marked as compressed. This is the file type to which Gzip tranforms files.
let writeStream = fs.createWriteStream('example2.txt.gz');

//Create a transform string : It basically compresses the textual information
let gzip = zlib.createGzip();

//Transform(compress)  data chunks from one file to another using Gzip
readStream.pipe(gzip).pipe(writeStream); 

//Uncompress and display data from *.gz file
//For this us Gunzip instead of Gzip
let gunzip = zlib.createGunzip();
//change Read and Write stream objects so they point to the proper file
readStream = fs.createReadStream("example2.txt.gz");
writeStream = fs.createWriteStream("final.txt");

//Extract data from *.gz file into uncompressed format
readStream.pipe(gunzip).pipe(writeStream);
// //Display the uncompressed content
 dStream.on("data",(chunk)=>{console.log(chunk);});