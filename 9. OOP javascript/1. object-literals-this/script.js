const full_name = document.getElementById("full-name");
// object

// object has its own prototype
const user = {
  firstname: "mehtab",
  lastname: "kazmi",
  age: 28,
  fullname: function () {
    return this.firstname + " " + this.lastname;
  },
};

const user1 = {
  firstname: "ali",
  lastname: "raza",
  age: 25,
  fullname: function () {
    return this.firstname + " " + this.lastname;
  },
};

full_name.textContent = `${user.fullname()} , ${user1.fullname()}`;
