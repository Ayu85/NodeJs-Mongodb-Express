const express = require('express');
const server = express();
const fs=require('fs')
const users=fs.readFileSync('./mock_data/users.json')
server.get('/users',(req,res)=>{
    res.setHeader('Content-Type','application/json')
    res.send(users);
    console.log(req.url);
    
})


server.listen(3000,()=>{
    console.log("Server Started");
    
})