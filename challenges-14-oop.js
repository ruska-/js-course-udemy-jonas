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

//Challenge #3
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV("Tesla", 120, 23);

console.log(tesla);
tesla.chargeBattery(90);
tesla.accelerate();

//Challenge #4
class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
    );
    return this;
  }

  chargeBattery() {
    this.#charge = chargeTo;
    return this;
  }

  break() {
    this.speed -= 10;
    this.#charge += 1;
  }
}
