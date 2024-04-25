// stores values in stack
// stack uses number , string etc
const firstname = "mehtab";
const lastname = "kazmi";

("b"); // last        pop("b") pop("a") pop("t") pop("h")  push("t") push("a") push("b")
("a");
("t");
("e");
("m"); // first

// lifo (last in first out) filo
let fullname = firstname;
fullname = "haider";
console.log(firstname, fullname);

// heap
const user = {
  name: "ali",
  age: "20",
};
let newUser = user;
newUser.name = "sultan";

console.log(user.name, newUser.name);
