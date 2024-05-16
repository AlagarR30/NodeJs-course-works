const mongoose = require('mongoose')
const joi = require('joi')
const { required } = require('joi/lib/types/lazy')

mongoose.connect('mongodb://127.0.0.1/eLearning')
.then(()=>console.log('Connected with dataBase!'))
.catch((error) => console.log('Error occured while connecting DataBase!'))

const schema = mongoose.Schema({
    name:{type:String , required:true , minLength : 3 ,  maxLength : 15}
})
const db = mongoose.model('categories',schema)


function validator(category){
    const schema = joi.object({
        name : joi.string().min(3).required()
    })
    return schema.validate(category)
}

exports.categorySchema = schema
exports.validator = validator
exports.db = db