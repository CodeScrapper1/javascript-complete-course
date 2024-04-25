// for in loop iterate over the properties of object (Array, object)
// for of loop iterate over the values of object (Array, object)
const colors = ["white", "black", "blue", "green", "yellow"];
const user = {
  name: "mehtab",
  age: 25,
};

// for (const key in user) {
//   console.log(key);
//   console.log(user[key]);
// }

// for (const key in colors) {
//   console.log(key);
//   console.log(colors[key]);
// }

// for of loop
// for (const value of colors) {
//   console.log(value);
// }

const map = new Map();
map.set("name", "mehtab");
map.set("age", 25);
for (const value of map) {
  console.log(value);
}
