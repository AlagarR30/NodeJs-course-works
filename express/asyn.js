
console.log("Before")
const fs = require('fs')
fs.readFile('file.txt',(err,data)=>{
    console.log('file1 ->'+data)
    fs.readFile('file2.txt',(err,data)=>{
        console.log("File 2-> "+data)
        fs.readFile('file3.txt',(err,data)=>{
            console.log("File 3-> "+data)
        })
    })
})

console.log("After")
//There are three different areas are responsible for the execution of a task, they are 1.callstack 2.nodeAPIs 3.callbackQueue
//the call stask is for execution of the sync functions
//2.the nodeAPI is act as the waiting area for the asyn function till the callstack is empty
//3.callback queue will release the task one by one for the execution once the stack is empty
//the main component here is eventloop which will look the call stack and make the execution