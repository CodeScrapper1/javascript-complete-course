// var , let , const

// var
var firstname = "tahir";
console.log(firstname);
var lastname = "kazmi";
console.log(lastname);

firstname = "mehtab";

console.log(firstname, ",", lastname);

// const
const age = 25;
// age = 20;
console.log(age);

// let
let gender = "male";
gender = "female";
console.log(gender);

// let value = 1;

// if (true) {
//   value = value + 1;
// }
// console.log(value);

// if (true) {
//   let value = 1;
//   value = value + 1;
// }

if (true) {
  var value = 1;
  value = value + 1;
}
console.log(value);

const arr = [12, 34, 454, 56, 56];
console.log(arr);
console.log(arr[4]);

const person = {
  firstn: "mehtab",
};
person.lastn = "kazmi";
person.age = 24;
console.log(person);
