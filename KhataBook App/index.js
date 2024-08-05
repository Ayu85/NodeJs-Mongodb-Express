const express = require('express')
const app = express();
const fs = require('fs')
const path=require('path')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname,"public")))
app.get('/', (request, response) => {
    response.render('index')
})
app.get('/create-hisaab', (request, response) => {
    response.render('create')
})

app.post('/createnewhisaab', (req, res) => {
    const now = new Date();
    // Extract day, month, and year
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // getMonth() returns 0-11, so add 1
    const year = now.getFullYear();
    const filename=`./files/${`${day}-${month}-${year}`}.txt`;
    fs.writeFile(filename, req.body.hisaab , (err) => {
        if (err) res.send('error')
        else
            res.send("created")
    })
    console.log(req.body)

})
app.listen(1111)