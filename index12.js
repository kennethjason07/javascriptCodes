//closures in javascript

function add(a,b){
    const sum=a+b;
    return function (){
        console.log("hello world");
    }
}

const output = add(10,20);

// console.log(output);

output();