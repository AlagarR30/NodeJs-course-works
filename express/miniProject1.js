//the get,post,put,delete methods are used for the CRUD operation 

let students = [
    {name:'Alagar',rollNo:'21ee008',age:21},
    {name:'Dinesh',rollNo:'21ee025',age:19},
    {name:'Dharun',rollNo:'21ee021',age:20},
    {name:'Ahil',rollNo:'21ee007',age:18},
    {name:'Kavya',rollNo:'21ee055',age:20},
    {name:'Gowtham',rollNo:'21ee033',age:20},
]
const express = require('express')
const cusmiddleware = require('./middle.js')
//third party middleware has to be installed and imported mannually
const morgan = require('morgan')
const app = express()
//middleware
app.use(express.json())
//third part middleware can be used same as the custom middleware 
app.use(morgan())
//custom MiddleWare
app.use(function(req,res,next){

    console.log('Naanthaan bruh middleware uhh!')
//the next function shuld be called for passing the control to the next operation
    next()
})
app.use(cusmiddleware)
//this rout will displayy the students in the database
app.get('/students' , (req,res)=>{
    res.send(students);
})
// ths route will find the particular student based on the rollnum
app.get('/:id',(req,res)=>{
    const student = students.find(stud => stud.rollNo === req.params.id)
    if (student) {
        res.send(`<center >Name: ${student.name}<br>Roll No: ${student.rollNo}<br>Age: ${student.age}</center>`)

    } else {
        res.status(404).send('Student not found');
    }
})
// as we saw before the post method is used to CREATE a new entry
app.post('/students',(req,res)=>{
    const student = {name:req.body.name,rollNo:req.body.roll,age:req.body.age}
    students.push(student);
    res.send(student)
    console.log(student)
})
//the put method is used here for the UPDATE purpose
app.put('/students',(req,res)=>{
    const student = students.find(stud => stud.name === req.body.name)
    student.name = req.body.update
    res.send(students)
})
//deleteing entry
// app.delete('/students/:name',(req,res)=>{
//     let updatedarr = students.filter(stud => stud.name !== req.params.name)
//     students = updatedarr
//     res.send(students)
// })
app.delete('/students/:name',(req,res)=>{
    let arr = students.filter(stud =>stud.name !== req.params.name)
    students = arr
    res.send(arr);
})
//Started listening the port 
app.listen(3000,console.log('Ahh ready bruh. . .'))