const ex = require('express')
const app = ex();
app.get('/',(req,res)=>{
    
    res.send('Message from server!')
})
app.listen(3000,console.log('Ready thala. . .'))