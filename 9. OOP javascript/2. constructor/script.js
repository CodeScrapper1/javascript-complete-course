// constructor function
function User(firstname, lastname, age) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;
  this.fullname = function () {
    return this.firstname + " " + this.lastname;
  };
}

// create instance of User constructor function
const obj = new User("mehtab", "kazmi", 28);
const obj1 = new User("ali", "raza", 25);
console.log(obj1.fullname(), obj.fullname());

console.log(obj.constructor);
console.log(obj instanceof User);
