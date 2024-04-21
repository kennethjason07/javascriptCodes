//try and catch

console.log("a")

const prom= new Promise(function(resolve,reject){
    reject("iam a error");
})

// prom.then(function(data){
//     console.log("c")
// }).catch(function(err){
//     console.log(err);
// })

async function abc(){
    try{
        await prom;
        console.log("c")
    }
    catch(e){
        console.log(e);
    }
}
abc();