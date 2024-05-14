// function PlaceOrder(drink){
//     return new Promise((resolve,reject)=>{
//         if(drink ==='coffee')resolve('Order Received!')
//         else reject('Order deined!')
//     })
// }

// function processOrder(order){
//     return new Promise((resolve)=>{
//         console.log('Order is being processed!')
//         resolve('Coffee is served!')
//     })
// }

// PlaceOrder('coffee').then((orderPlaced)=>{
//     console.log(orderPlaced);
//     let processed = processOrder(orderPlaced);
//     return processed

// }).then((order)=>{
//     console.log(order);
// })
// .catch((err)=>{
//     console.log(err)
// })
function orderCoffee(drink){
    return new Promise((resolve,reject)=>{
        if(drink === 'coffee') resolve('Order Placed!')
        else reject('Order Denied!')
    })
}
function processOrder(order){
    return new Promise((resolve)=>{
        console.log('Wait till your order is Processed!')
        resolve('Coffee is ready. . .Enjoy it!')
    })
}
// orderCoffee('coffee').then(state=>{
//     console.log(state)
//     return processOrder(state)
// }).then(isReady=>{
//     console.log(isReady)
// })
// .catch(err=>{
//     console.log(err);
// })
async function order(drink){
    let orderPlaced = await orderCoffee(drink)
    console.log(orderPlaced)
    let prossesed = await processOrder('chumma');
    console.log(prossesed) 
}
order('coffee')