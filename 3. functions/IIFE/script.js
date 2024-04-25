// iife
function funname() {
  console.log("simple function");
}
funname();

(function () {
  console.log("iife function");
})();

// parameterized
(function (name) {
  console.log("iife function", name);
})("mehtab kazmi");

(function (age) {
  console.log("iife function", age);
  const sample = () => age + 5;
  const result = sample();
  console.log(result);
})(25);

// call stack
// function one() {
//   console.log("one");
// }

// function two() {
//   console.log("two");
// }

// function three() {
//   console.log("three");
// }

// one();
// two();
// three();

function one() {
  console.log("one");
  two();
}

function two() {
  console.log("two");
  three();
}

function three() {
  console.log("three");
}

one();
