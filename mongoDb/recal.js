const { equalTo } = require('firebase/database')
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/testdatabase')
.then(()=>console.log('Connected!'))
.catch((err)=>console.log('Error Occured!'))

const schema = mongoose.Schema({
    name:{type:String , required:true},
    dept:{type:String , required:true},
    age:{type:Number , required:function(){return this.dept!=='Random'}},
    enteredTime :{type:Date , default:Date.now()}
})

const Friend = mongoose.model('Friends',schema)
async function addData(){
    const friend = new Friend({
        name:'Kumaru',
        dept:'Random',
        //age:25
    })
    try{
        await friend.validate()
        console.log("Validation successfull!")
    }catch(error){
        console.log('Validation failed!',error)
    }
    
}

addData()
// lt - lessthan
// qt- geater than
// lte , gte - leserthan or equalTo
// eq - equalTo
// in 
// not in
async function fetchData(){
    const friend = await Friend.find({age:{$gte :19}}).and([{dept : 'EEE'},{name :'Dharun'}])
    console.log(friend)
}
//fetchData()

async function update(id){
    const frnd =await Friend.findById(id)
    // frnd.age = 20
    frnd.name = 'Amala shaji'
    const updated = await frnd.save()
    console.log(frnd)
}
//update('6641d4f6863a27b67facc201')

async function deleteFrnd(id){
    let people = await Friend.findOneAndDelete({_id:id})
    console.log(people)
}
// deleteFrnd('6641ec5516860b9938676175')