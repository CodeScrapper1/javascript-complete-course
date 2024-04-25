// for loop
// syntax
// for (inital expression;condition;increment/ decrement){
//     statement
// }

// for (let index = 0; index <= 15; index++) {
//   console.log(index);
// }

// condition in statement
// for (let index = 0; index <= 6; index++) {
//   if (index == 5) {
//     console.log("we got 5 index");
//   } else {
//     console.log("other indexes " + index);
//   }
// }

// break statement
// for (let index = 0; index <= 6; index++) {
//   //   if (index == 4) {
//   //     break;
//   //   }
//   if (index == 4) break;
//   console.log(index);
// }

// continue statement
// for (let index = 0; index <= 6; index++) {
//   //   if (index == 4) {
//   //     continue;
//   //   }
//   if (index == 4) continue;
//   console.log(index);
// }

// for loop with array
const colors = ["white", "black", "blue", "green", "yellow"];

for (let index = 0; index < colors.length; index++) {
  console.log(index);
  console.log(colors[index]);
}
