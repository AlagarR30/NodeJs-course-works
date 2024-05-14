const express = require('express')
const app = express()
app.get('/home',(req,res)=>{
    res.send('You are now at Home page!')
})
app.get('/contact',(req,res)=>{
    res.send('ContactUs here: LinkedIn')
})
app.get('/',(req,res)=>{
    res.send('Enna da ithu :'+req.params)
    console.log(req.params.id)
})
app.get('/:id',(req,res)=>{
    res.send('Enna da ithu :'+req.params.id)
    console.log(req.params.id)
})
app.listen(3000,console.log('Ah ready thala.!'))
