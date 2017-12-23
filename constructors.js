function Person(name) {
  this.name = name;
  this.sayName = function() {
    console.log(this.name);
  };
}

let person1 = new Person('madhan');
const fn = person1.sayName;

let person = {
  name: 'madhan',
  sayName: function() {
    console.log(this.name);
  }
};

person.sayName();
