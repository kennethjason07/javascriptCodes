//CallBack Functions

function add(a,b,cd){
    console.log(a+b);
    cd();
}

const name=function(){
    console.log(
        "Hello World!"
    )
}

// console.log(10,20,function(){console.log("hello World!")}
// )

console.log(10,20,name);