var person1 = {
  _name: 'Nicholas'
};

Object.defineProperty(person1, 'name', {
  get: function() {
    return this._name;
  },
  set: function(value) {
    this._name = value;
  },
  enumerable: true,
  configurable: true
});

console.log(person1.name);
person1.name = 'changed';
console.log(person1.name);
