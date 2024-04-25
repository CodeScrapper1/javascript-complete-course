// nested function example 1
// function one() {
//   const firstname = "mehtab";
//   console.log(firstname);

//   function two() {
//     const lastname = "kazmi";
//     console.log(lastname);
//   }

//   two();
// }

// one();

function one() {
  const firstname = "mehtab";

  function two() {
    const lastname = "kazmi";
    console.log(firstname, lastname);
  }

  two();
}

one();

// fat arrow function

const arrowFunc = () => {
  const lastname = "kazmi";
  console.log(lastname);
};

arrowFunc();

// function sum(num1, num2) {
//   return num1 + num2;
// }

// const add = sum(12, 14);
// console.log(add);

const sum = (num1, num2) => num1 * num2;

const add = sum(12, 14);
console.log(add);
