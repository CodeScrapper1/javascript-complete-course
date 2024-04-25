// syntax

const colors = ["white", "black", "blue", "green", "yellow"];

const users = [
  {
    name: "mehtab",
    age: 28,
  },
  {
    name: "kazmi",
    age: 25,
  },
];

// colors.forEach(function (item) {
//   console.log(item);
// });

// colors.forEach((item) => {
//   console.log(item);
// });

// colors.forEach((item) => console.log(item));

// get original array and index
// colors.forEach((item, index, arr) => console.log(item, " ", index, " ", arr));

// function user(item, index, arr) {
//   console.log(item, " ", index, " ", arr);
// }
// colors.forEach(user);

function user(item, index, arr) {
  console.log(item.name, " ", item.age);
  console.log(index, " ", arr);
}
users.forEach(user);
