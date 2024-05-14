const express = require('express')
const app = express()
app.get('/',(req,res)=>{
    res.send('This is the message sent to the server. . .')
})
app.listen(3000,()=>console.log('Page is running in port: 3000'));