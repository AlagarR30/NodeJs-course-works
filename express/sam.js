const ex = require('express')
const app = ex()
app.get('/home',(req,res)=>{
    res.send('Message from the server!')
})
app.get('/Contact',(req,res)=>{
    res.send('LinkedIn variya bruh. . .')
})
let courses = [
    {id:'a' , name:'apple'},
    {id:'b', name:'banana'},
    {id:'c' , name:'cat'},
    {id:'d' , name:'dog'}
]
app.get('/random/:id',(req,res)=>{
    const name = courses.find(course => course.id === req.params.id)
    res.send(name)
})
const students=[
    {name:'Alagar' ,rollno:'21ee008',age:21},
    {name:'Mareesh' ,rollno:'21ee001',age:13},
    {name:'Ahil' ,rollno:'21ee007',age:19},
    {name:'kavya' ,rollno:'21ee055',age:20},
]
app.get('/students/:rollno',(req,res)=>{
    const student = students.find(stud => req.params.rollno === stud.rollno)
    res.send(student)
})
app.listen(3000,()=> console.log('Pooi 3000 ah paaruu. . .'))