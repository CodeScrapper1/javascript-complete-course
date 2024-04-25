// creating object
// object with in {}
// key and value pair name is , "mehtab" is value of {name:"mehtab"}

// const user = {
//   firstname: "mehtab",
//   lastname: "kazmi",
//   age: 25,
// };

// nested obbject
const user = {
  firstname: "mehtab",
  lastname: "kazmi",
  age: 25,
  address: {
    city: "lahore",
    state: "punjab",
  },
  hobbies: ["sports", "learning"],
};

// get single value from object

const firstname = user.firstname;
const lastname = user.lastname;
const fullName = `${firstname} ${user.lastname}`;

// const address = user.address.city;
const address = user["address"]["city"];

// const hobbies = user["hobbies"][0];
const hobbies = user.hobbies[0];

// add key value in existing object
user.isAdmin = true;
console.log(user.isAdmin);

// object methods
const obj = new Object();

obj.name = "mehtab";
obj.age = 24;
console.log(obj);

const obj1 = { name: "ali", age: 20 };
const obj2 = { city: "lahore", state: "punjab" };

// spread operator to concat two objects
const obj3 = { ...obj1, ...obj2 };

const getKeys = Object.keys(obj3);
const getValues = Object.values(obj3);
const getEntries = Object.entries(obj3);

const isExist = obj3.hasOwnProperty("name");
console.log(isExist);

// destructure objects
console.log(obj3);
// const { name, age } = obj3;
const { name, age, ...value } = obj3;
console.log(value);
