//async and await

console.log("a");

const prom=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("b");
    },0)
})

async function ken(){
    await prom;
    console.log("c")
}

