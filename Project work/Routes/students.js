const express = require('express')
const router = express.Router()
const {Student,validator} = require('../models/studentsModel')


router.get('/', async (req,res)=>{
    const students = await Student.find()
    if(!students) res.status(400).send('Internal server error!')
    res.send(students)
})

router.post('/',async(req,res)=>{
    const {error} = validator(req.body)
    if(error) res.status(400).send(error.details[0].message)
    const student = new Student({
        name : req.body.name,
        phone : req.body.phone
    })
    const result = await student.save()
    if(result) res.send('Student added successfully!')
})

router.put('/:id',async(req,res)=>{
    const {error} = validator(req.body)
    if(error) res.status(400).send(error.details[0].message)
    const student = await Student.findByIdAndUpdate(req.params.id , {name : req.body.name}, {new:true})
    if(!student) res.status(404).send('The student you are searching is not found!')
    res.send('Successfully Updated!');
})


router.delete('/:id',async (req,res)=>{
    const student = await Student.findByIdAndDelete(req.params.id)
    if(!student) res.status(404).send('The student you are searching is not found!')
    res.json({ message: 'Removed student!', student });

})

router.get('/:id',async (req,res)=>{
    const student = await Student.findById(req.params.id)
    if(!student) res.status(404).send('The student you are searching is not found!')
    res.send(student)
})


module.exports = router