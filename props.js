const madhan = {};

Object.defineProperty(madhan, 'name', {
  value: 'madhan',
  enumerable: false,
  writable: true
});

console.log(madhan.name);
madhan.name = 'madhan ganesh';
console.log(madhan.name);
console.log('name' in madhan);
console.log(Object.hasOwnProperty('name'));

for (prop in madhan) {
  console.log(`${prop} - ${madhan[prop]}`);
}

const keys = Object.keys(madhan);
console.log(keys);
