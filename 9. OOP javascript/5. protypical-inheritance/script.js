function User(name) {
  this.name = name;
}

User.prototype.firstname = function () {
  console.log("my first name is " + this.name);
  return this.name;
};

function Child(name, age) {
  User.call(this, name);
  this.age = age;
}

Child.prototype = Object.create(User.prototype);

// Child.prototype.firstname = function () {
//   console.log("my first name is " + this.name);
//   return this.name;
// };

const obj = new User("mehtab");
console.log(obj.firstname());

const childObj = new Child("kazmi", 28);
console.log(childObj.firstname());
