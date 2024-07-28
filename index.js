const fs = require('fs')

// to create a new file in same directory
// fs.writeFile("hey.txt","new file created",(err)=>{
//     if(err) console.log(err);
//     else console.log("file created");
// })

// to append a text to an existing file
// fs.appendFile("hey.txt"," , append text",(err)=>{
//     if(err) console.log(err.message);
//     else console.log("Appended");
// })

//to delete a file
// fs.unlink("hey.txt",(err)=>{
//     if(err) console.log(err.message);
//     else console.log("file removed");
// })

// to delete a folder , if folder is empty keep recursive true else false
// fs.rm('./copy',{recursive:true},(err)=>{
//     if(err) console.log(err.message);
//     else console.log("folder deleted");
// })

//to read a file
// fs.readFile('Notes.md',(err,data)=>{
//     if(err) console.log(err.message);
//     console.log("file read" ,data.toLocaleString());
// })

// *******************************************************//
//*********creating a http server in node js *************/

const http = require('http')
const server = http.createServer((req, res) => {
    res.end("Hello from server")
    console.log(("server created"));
    console.log(req)
})
server.listen(4900)