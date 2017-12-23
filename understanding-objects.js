const person = {
  name: 'madhan',
  age: 42,
  say: () => {
    console.log(`hi ${this.name}`);
  }
};

console.log('[name in person]', 'name' in person);
console.log('[toString in person]', 'toString' in person);
console.log('[person.hasOwnProperty("name")]', person.hasOwnProperty('name'));
console.log(
  '[person.hasOwnProperty("toString")]',
  person.hasOwnProperty('toString')
);

for (prop in person) {
  console.log(prop);
  console.log(person[prop]);
}

console.log(
  'person.propertyIsEnumerable("toString")',
  person.propertyIsEnumerable('toString')
);

const propKeys = Object.keys(person);
propKeys.forEach(p => {
  console.log(p);
  console.log(person[p]);
});
