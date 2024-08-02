const express=require('express')
const app=express();

app.get('/',(req,res)=>{
    res.send("home page")
})
app.get('/profiles',(req,res)=>{
    res.send("profiles page");
})
app.get('/*',(req,res)=>{
    res.send("404 not found")
})
app.listen(3000);