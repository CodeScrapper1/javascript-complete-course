//while first check condition than run loop
// do while first time display results and than check condition

// while loop syntax

// initialize variable

// while(condition){
//     statement

//     increment / decrement
// }

// let index = 0;

// while (index <= 10) {
//   console.log(index);

//   index++;
// }

// let index = 10;

// while (index >= 0) {
//   console.log(index);

//   index--;
// }

const colors = ["white", "black", "blue", "green", "yellow"];
let index = 0;

// while (index < colors.length) {
//   console.log(index);
//   console.log(colors[index]);

//   index++;
// }

// do while syntax
do {
  console.log(index);
  console.log(colors[index]);
  index++;
} while (index < 0);
