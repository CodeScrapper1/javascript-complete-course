// parent class
class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  add() {
    console.log("parent");
    return this.num1 + this.num2;
  }
}

// child class addition
class Addition extends Calculator {
  constructor(num1, num2, num3) {
    super(num1, num2);

    this.num3 = num3;
  }

  add() {
    console.log("child");
    return this.num1 + this.num2;
  }
}

class Subtration extends Calculator {
  constructor(num1, num2) {
    super(num1, num2);
  }

  sub() {
    console.log("par");
    return this.num1 - this.num2;
  }
}
const additionObj = new Addition(3, 4, 5);
const subtractObj = new Subtration(3, 4);

console.log(additionObj.add());
console.log(subtractObj.sub());
