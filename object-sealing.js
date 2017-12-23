const person = {};

Object.defineProperty(person, 'name', {
  value: 'madhan'
});

Object.seal(person);
person.age = 42;
person.name = 'madhan ganesh';

console.log(person);
console.log(person.name);

for (prop in person) {
  console.log(prop);
}
console.log('name' in person);
console.log(Object.hasOwnProperty('name'));
