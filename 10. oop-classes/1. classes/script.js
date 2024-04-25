function User(name) {
  this.name = name;
}

class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  addition() {
    return this.num1 + this.num2;
  }

  subtract() {
    return this.num1 - this.num2;
  }

  multiplication() {
    return this.num1 * this.num2;
  }
  division() {
    return this.num1 / this.num2;
  }
}

const obj = new Calculator(4, 2);
console.log(obj.num1);
console.log(obj.addition());
console.log(obj.subtract());
console.log(obj.multiplication());
console.log(obj.division());
