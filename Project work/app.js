const express = require('express')
const app = express()
app.use(express.json())
const categories = require('./Routes/categories')
const students = require('./Routes/students')
app.use('/categories',categories)
app.use('/students',students)



app.listen(3000,()=>console.log('App is live now!'))


