const person  = {
  name : "shubham",
  age : 21,
  email :"Shubham@gmail.com",

}

// console.log(`${person.name} ${person.email} ${person.age}`);

const {name, age, email} = person;

console.log(`${name} ${email} ${age}`);