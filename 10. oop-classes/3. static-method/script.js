class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  addition() {
    return this.num1 + this.num2;
  }

  static getMethod() {
    return "calculator";
  }
}

const obj = new Calculator(5, 10);

console.log(obj.addition());
console.log(Calculator.getMethod());
