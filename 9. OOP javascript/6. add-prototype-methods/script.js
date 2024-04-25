function Calculator(num1, num2) {
  this.num1 = num1;
  this.num2 = num2;
}

Calculator.prototype.addition = function () {
  return this.num1 + this.num2;
};

Calculator.prototype.subraction = function () {
  return this.num1 - this.num2;
};

Calculator.prototype.multiplication = function () {
  return this.num1 * this.num2;
};

Calculator.prototype.division = function () {
  return this.num1 / this.num2;
};

const obj = new Calculator(5, 6);

console.log(obj.addition());
console.log(obj.subraction());
console.log(obj.multiplication());
console.log(obj.division());
