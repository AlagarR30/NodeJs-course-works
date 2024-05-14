let promise = new Promise(function(resolve,reject){
    const a = 5;
    const b = 6;
    setTimeout(()=>{
        if(a==b) resolve('equal');
        else reject('not equal');
    },2000)
}
)

promise
    .then(function(result){
    console.log(result)
})
    .catch((error)=>{
    console.log(error);
})