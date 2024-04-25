const user = {
  firstname: "mehtab",
  lastname: "kazmi",
  age: 25,
};

const userJson = JSON.stringify(user);
console.log(user.firstname);
console.log(userJson.firstname);

//  convert into obj
const obj = JSON.parse(userJson);

const array = [
  {
    firstname: "mehtab",
    lastname: "kazmi",
    age: 25,
  },
  {
    firstname: "ibn e",
    lastname: "haider",
    age: 25,
  },
  {
    firstname: "ghulam",
    lastname: "haider",
    age: 25,
  },
];
const arrayJson = JSON.stringify(array);

const arr = JSON.parse(arrayJson);
console.log(arr);
