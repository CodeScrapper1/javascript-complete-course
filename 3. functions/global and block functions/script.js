// 'window'

const value = 50;

function globalFunc() {
  console.log(value);
}

globalFunc();

console.log(value);

// next example

var num1 = 10;
function basic() {
  var num2 = 20;
  console.log(num1 + num2);
}

console.log(num1);
basic();

// example 3
function sum() {
  let a = 6;
  console.log(a);
}
sum();
// console.log(a);

// block scope
if (true) {
  let b = 10;
  console.log(b);
}
console.log(b);
