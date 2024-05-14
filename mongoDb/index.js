const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/RecallDb')
.then(()=>console.log('Connection established Successfully!'))
.catch((err)=>console.log('Error Occured!'))

const schema = mongoose.Schema({
    name:String,
    age:Number
})

const People = mongoose.model('People',schema)

async function addData(n , a){
    const person = new People({
        name:n,
        age:a
    })
    const result = await person.save()
    console.log(result)
}
//addData('',20)
//let id =''
async function readData(){
    const found = await People.find({_id :'6642ec7aa39c6c7565ef146a'})
    console.log(found)
    //id = found._id

}
//readData()

async function update(id){
    const target = await People.findById(id)
    target.name = 'Kadhali'
    const result = await target.save()
    if(result) console.log('Updated Successfully!')
    else console.log('Update failed!')
}
//update('6642ec7aa39c6c7565ef146a')

async function deletedata(){
    const target = await People.findOneAndDelete({name:'Kadhali'})
    console.log(target)
}
deletedata()
