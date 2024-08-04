const express=require('express')
const app=express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')

app.get('/',(request,response)=>{
    response.render('index')
})
app.listen(1111)