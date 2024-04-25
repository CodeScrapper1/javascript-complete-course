// constructor function
function User(firstname, lastname, age) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;
  this.fullname = function () {
    return this.firstname + " " + this.lastname;
  };
}

const obj = new User("mehtab", "kazmi", 28);
console.log(obj.fullname());

// add properties
obj.email = "mehtab@gmail.com";

console.log(obj.email);

console.log(obj.age);

// delete property
delete obj.age;
console.log(obj.age);

// check property
console.log(obj.hasOwnProperty("firstname"));

// get keys
console.log(Object.keys(obj));

// get values
console.log(Object.values(obj));

// get entries
console.log(Object.entries(obj));
