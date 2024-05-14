function middleware1(req,res,next){
    console.log('The custom middleware!')
    next()
} 
module.exports = middleware1;