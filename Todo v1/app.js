const express = require('express')

const bodeParser = require('body-parser')

const app = express()

app.use(bodeParser.urlencoded({extended:true}))

app.set('view engine','ejs')

const option = {weekday:'long',year:'numeric' , month:'long' , day:'numeric'}

let items = ['Workout','Drink water','Up skill']

app.get('/',(req,res)=>{
    const today = new Date()
    let now = today.toLocaleDateString('en-US',option)
    res.render('sample',{now:now , items : items})
})

app.post('/',(req,res)=>{
    const item = req.body.newValue
    items.push(item)
    console.log(item)
    res.redirect('/')
})
app.listen(3000,()=>console.log('app is listening 3000'))