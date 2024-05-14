const os = require('os')
console.log(os.arch())
if(os.platform()=='win32'){
    console.log('massu bruh!')
}
console.log(os.networkInterfaces())
console.log(os.cpus())
console.log(os.totalmem())
console.log(os.freemem())