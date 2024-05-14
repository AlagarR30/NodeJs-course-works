const express = require('express')
const app = express();
const bp = require('body-parser')
app.use(bp.json())
let arr = [];
app.get('/task',(req,res)=>{
    if(arr.length !==0 )res.send(arr);
    else res.send('NO TASKS HAS BEEN ADDED!')
})
app.post('/task/add',(req,res)=>{
    const newTask ={task:req.body.task,isCompleted:false}
    arr.push(newTask)
    res.send(arr);
})
app.put('/task/mark',(req,res)=>{
    const taskId = Number(req.body.msg)
    if(taskId>=0 && taskId<arr.length){
        arr[taskId].isCompleted = true
        res.send(arr)
    }
    else res.status(404).send('Task not Found!')
})
app.delete('/task/remove',(req,res)=>{
    arr.splice(Number(req.body.msg),1)
    console.log(`Deleted task at ${Number(req.body.msg)}`)
    res.send(arr)

})
app.listen(3000,()=> console.log('App is Live now!'))