const fs = require('fs')

// to create a new file in same directory
// fs.writeFile("hey.txt","new file created",(err)=>{
//     if(err) console.log(err);
//     else console.log("file created");
// })

// to create a new file in same sync directory
// fs.writeFileSync("heysync.txt","new file created")
//     console.log("12");

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

// to read a file
// fs.readFile('Notes.md',(err,data)=>{
//     if(err) console.log(err.message);
//     console.log("file read" ,data.toLocaleString());
// })


//to read files and folders in folder
// fs.readdir('node_modules/one-liner-joke',(err,data)=>{
//     if(err) console.log(err);
//     else console.log(data);
    
// })
// *******************************************************//
//*********creating a http server in node js *************/

// const http = require('http')
// const server = http.createServer((req, res) => {
//     // basic routing done in node js
//     if(req.url==='/')
//         res.end("Home page")
//     else if(req.url==='/login')
//         res.end("login page")
//     console.log(("server created"));
// })

// server.listen(4900)