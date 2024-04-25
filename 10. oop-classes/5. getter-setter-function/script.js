class User {
  constructor(firstname, lastname) {
    this._firstname = firstname;
    this._lastname = lastname;
  }

  get firstName() {
    return this._firstname;
  }

  set firstName(value) {
    this._firstname = value;
  }

  get lastName() {
    return this._lastname;
  }

  set lastName(value) {
    this._lastname = value;
  }
}

const obj = new User("mehtab", "kazmi");

obj.firstName = "Ali";
obj.lastName = "raza";

console.log(obj.firstName, obj.lastName);

document.querySelector("h3").textContent = obj.firstName + " " + obj.lastName;
