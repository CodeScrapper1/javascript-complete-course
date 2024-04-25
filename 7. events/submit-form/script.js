const form = document.getElementById("submit-form");
const fullname = document.getElementById("fullname");

// const submit = (e) => {
//   e.preventDefault();

// const firstname = document.getElementById("firstname");
// const lastname = document.getElementById("lastname");
//   console.log("firstname: ", firstname.value);
//   console.log("lastname: ", lastname.value);

//   fullname.textContent = firstname.value + " " + lastname.value;
// };

const submit = (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const firstname = formData.get("firstname");
  const lastname = formData.get("lastname");
  fullname.textContent = firstname + " " + lastname;
};

form.addEventListener("submit", submit);
