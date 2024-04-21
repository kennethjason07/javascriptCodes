//Rest and Spread

const person={
    name:"Kenneth",
    age:20,
    city:"Bidar"
}

// const person1=person;

const person1={...person};
person1.name="jason";

console.log(person);
console.log(person1);

const names=["Amit","Ankit","Abhishek"];

const name1={...names};

name1[0]="jason";

console.log(names);
console.log(name1);