const fm=require('fs');
//to read a file
fm.writeFileSync('test.txt' , 'Arasaneehhhhhhhh!...veluthu kettu ,veluthu kettu ,veluthu ketttu,')
let content = fm.readFileSync('test.txt')
console.log(''+content)
fm.appendFileSync('test.txt',' malligai poo pole thunuyellam veelithudumeey, ')
console.log(''+fm.readFileSync('test.txt'))
fm.appendFileSync('test.txt','vennila thothidumey arasanalleeyy!!')
console.log(""+fm.readFileSync('test.txt'))
//to delete a file 
fm.unlinkSync('C:\\Users\\alaga\\OneDrive\\Documents\\nodeJS\\calculator.js')
console.log('file deleted!')
 
//to create a dir!
fm.mkdirSync('ithoo')