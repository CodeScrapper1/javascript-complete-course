// default parameters

function users(userRole = "user") {
  console.log(userRole);
}

users("admin");

// multi params

function average(...values) {
  console.log(values);
}

average(2, 3, 45, 5, 6, 6, 6, 734);

// objects as parameters

const user = {
  firstname: "mehtab",
  lastname: "kazmi",
  age: 25,
};

function registration(newUser) {
  return `fullname: ${newUser.firstname} ${newUser.lastname}`;
}

const result = registration(user);

console.log(result);

// pass array in parameter
const array1 = [3, 54, 23, 12, 233, 4, 46];
const array2 = [53, 154, 223, 212, 23];

function basicArray(arr) {
  console.log(arr);
  const randomIndex = Math.floor(Math.random() * arr.length);
  console.log(arr[randomIndex]);
}

basicArray(array1);
basicArray(array2);
