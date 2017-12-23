class Car {
  constructor(name) {
    this.name = name;
  }

  drive() {
    return `${this.name} - drive`;
  }
}

Car.prototype.drive = function() {
  return `${this.name} - mockdrive`;
};

let car = new Car('bmw');
console.log(car.drive());
