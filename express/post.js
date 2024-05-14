const express = require('express')
const app = express()
app.get('/sample',(req,res)=>{
    res.send('This is the default message!')
})
const s ='sample txt'
app.post('/sample',(req,res)=>{
    s=req.body.msg
    res.send(s);
})
app.listen(3000,console.log('Ready bruh!'))