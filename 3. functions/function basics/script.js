// basics of function...

// define simple function
function hello() {
  // body
  console.log("my first function");
}

hello();
hello();

// parameterized function

function subtruction(num1, num2) {
  // body
  const min = num1 - num2;
  console.log(min, "subtraction");
}

// function call
subtruction(14, 2);
subtruction(24, 20);

// return value in function

function addition(num1, num2) {
  const plus = num1 + num2;
  return plus;
}

const result = addition(12, 4);

console.log(result);
