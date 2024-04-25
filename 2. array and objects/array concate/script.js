const colors1 = ["white", "red", "blue", "orange"];
const colors2 = ["pink", "yellow", "green", "brown"];

// nested array
// colors1.push(colors2);
// two dimentional array
const allColors = [colors1, colors2]; // 0,1

const twoD = allColors[0][3];

// concat
const concate = colors1.concat(colors2);

// spread operator
const spread = [...colors1, ...colors2]; // ...["white", "red", "blue", "orange"]  result "white", "red", "blue", "orange"
console.log(spread);

let flatArray = [
  1,
  2,
  3,
  4,
  [34, 5465, [9, 8, 7, [10, 91, 71], 6], 3],
  6,
  [34, 66, 4, 3, 32],
];

flatArray = flatArray.flat(3);
console.log(flatArray);

const checkArray = Array.isArray(colors1);
console.log(checkArray);

const newArray = Array.from("4534");
const a = 12;
const NumberArray = Array.of(a, 4, 5, 6);
console.log(NumberArray);
