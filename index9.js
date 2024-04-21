//Promises

// console.log("a");

// setTimeout(function(){
//     console.log("b");
// },0)

// console.log("c");



// console.log("a");


// const prom=new Promise(function(resolve,reject){
//     const age=10;
//     if(age>10){
//         resolve("Qualified");
//     }
//     else{
//         reject("unqualified");
//     }
// })

// prom.then(function(data){
//     console.log(data);
// }).catch(function(err){
//     console.log(err);
// })

// setTimeout(function(){
//     console.log("b");
// },0)

// console.log("c");

console.log("a");

const prom=new Promise(function(resolve,reject){

    setTimeout(function(){
        console.log("b");
        resolve();
    },0)
})


prom.then(function(data){
    console.log("c");
})

