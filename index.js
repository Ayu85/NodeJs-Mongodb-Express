const express=require('express')
const app=express();
app.set("view engine","ejs")

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render('form')
})
app.get('/profiles',(req,res)=>{
    res.send("profiles page");
})
// app.get('/*',(req,res)=>{
//     res.send("404 not found")
// })
app.post('/submitdata',(req,res)=>{
    console.log(req.query);
    res.send("data saved")
    
})
app.listen(3000);