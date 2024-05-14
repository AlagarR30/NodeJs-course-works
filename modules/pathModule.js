const pm = require('path')
//to extract the extension of the file 
if(pm.extname('C:\Users\alaga\OneDrive\Documents\nodeJS\index.js')=='.js'){
    console.log('Bruh ulla fullah javaScript uh bruhh!')
    console.log(pm.basename('C:\\Users\\alaga\\OneDrive\\Documents\\nodeJS\\index.js'))


}
//to retrive the path of a file
console.log(__filename)
console.log(__dirname)