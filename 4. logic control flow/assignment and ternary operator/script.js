// &&=

let num = 2;

if (num) {
  num = 5;
}

num = num && 10;
num &&= 10;
console.log(num);

// ||=

num = num || 10;
num ||= 10;
console.log(num);

// ??=
let num1 = null;
num1 = num1 ?? 10;
num1 ??= 10;
// num ||= 10;
console.log(num1);

// ternary operators
let age = 25;
if (age < 26) {
  console.log(true);
} else {
  console.log(false);
}

// const result = age < 26 ? true : false;
console.log(age < 26 ? true : false);
