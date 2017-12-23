('use strict');

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

var _createClass2 = function(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = true; //descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

var Person = (function() {
  function Person(name) {
    _classCallCheck(this, Person);

    this.name = name;
  }

  _createClass(Person, [
    {
      key: 'sayName',
      value: function sayName() {
        console.log(this.name);
      }
    }
  ]);

  return Person;
})();

/*class Person {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }
}*/

function Person1(name) {
  this.name = name;

  /*this.sayName = function() {
    console.log(this.name);
  };
  Object.defineProperty(this, 'sayName', {
    value: function() {
      console.log(this.name);
    },
    enumerable: true,
    configurable: true,
    writable: true
  });*/
}

_createClass(Person1, [
  {
    key: 'sayName',
    value: function() {
      console.log(this.name);
    }
  }
]);

console.log(Person1);
console.log(Person1.prototype);
//console.log(Person1.sayName());

/*Object.defineProperty(Person1, 'sayName', {
  value: function() {
    console.log(this.name);
  }
});*/

/*Person1.sayName = function() {
  console.log(this.name);
};*/

let p = new Person1('madhan');
p.sayName();

//Person1.sayName();

/*Person1.prototype.sayName = function() {
  console.log(this.name);
};*/

/*let people = [];
for (let i = 0; i < 10000000; i++) {
  people.push(new Person1(i.toString()));
}
console.log(people.length);
setTimeout(() => console.log('check memory...'), 10 * 1000);*/

/*const person = new Person('madhan');
person.sayName();*/

class Abc {
  sayName1() {}
}

console.log(Abc);
console.log(Abc.prototype);
console.log(Abc.prototype.hasOwnProperty('sayName'));

console.log(Person);
console.log(Person.prototype);
console.log(Person.prototype.hasOwnProperty('sayName'));
