const boolean = require('joi/lib/types/boolean')
const { required } = require('joi/lib/types/lazy')
const mongoose = require('mongoose')
const joi = require('joi')

const schema = mongoose.Schema({
    name:{type:String , required:true , minLength:3},
    phone :{type:String , required:true , minLength:10},
    isEnrolled :{type:Boolean,default:false}
})

const Student = mongoose.model('Student',schema)

function validator(student){
    const schem = joi.object({
        name : joi.string().required(),
        phone : joi.string().required().min(10)
    })
    return schem.validate(student)
}


exports.Student = Student
exports.studentSchema = schema
exports.validator =validator