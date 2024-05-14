const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/testdatabase')
.then(()=>console.log('connected!'))
.catch((err)=>console.log(err))


const schema = mongoose.Schema({
    name:String,
    age:Number,
    date:{type:String,default:Date.now}
})
const Student  = mongoose.model('student',schema)

async function fetchdata(){
    console.log('Finding!')
    const data = await Student.find({name :'Alagar'})
    console.log(data.time)
}
fetchdata()