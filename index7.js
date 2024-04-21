const person={
    name:"Kenneth",
    age:20,
    city:"Bidar",
    country:"India"
}

const {name,age,...place}=person;

console.log(name,age,place);