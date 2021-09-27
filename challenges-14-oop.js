"use strict";

//Challenge #1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  console.log((this.speed += 10));
};

Car.prototype.break = function () {
  console.log((this.speed -= 5));
};

const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);

car1.accelerate();
car1.break();
car2.accelerate();
car2.break();

//Challenge #2

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    console.log(this.make, (this.speed += 10));
  }

  break() {
    console.log(this.make, (this.speed -= 5));
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speedMiH) {
    this.speed = speedMiH * 1.6;
  }
}

const ford = new CarCl("Ford", 120);
ford.accelerate();
ford.break();
ford.accelerate();
ford.break();
ford.speedUS = 100;
console.log(ford.speed, ford.speedUS);
