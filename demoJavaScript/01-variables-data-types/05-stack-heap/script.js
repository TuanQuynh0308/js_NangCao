// Value is stored in the stack
const name = 'Quỳnh';
const age = 19;

// Reference is stored in the heap
const person = {
  name: 'Tuấn',
  age: 20,
};

let newName = name;
newName = 'Quỳnh2';

let newPerson = person;
newPerson.name = 'Tuấn 2';

console.log(name, newName); // Quỳnh, Quỳnh2
console.log(person, newPerson); // { name: 'Tuấn2', age: 20 }, { name: 'Tuấn2', age: 20 }