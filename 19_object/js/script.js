console.log("it works!");

let person = {
  name: 'Sasha',
  lastName: 'Averin',
  age: 30,
  teacher: false,
  sayHello: function() { return 'Hello '+ this.name; }
};

console.log(person.name);
console.log(person.sayHello());

person.canCode = true;
console.log(person);

person.age = 31;
console.log(person);

console.log(person.lastName);
