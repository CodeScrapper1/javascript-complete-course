const h1 = document.querySelector("h1");
const input = document.querySelectorAll("input");
const nameId = document.getElementById("name");
const check = document.getElementById("check");

h1.onclick = (event) => {
  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.type);
  console.log(event.timeStamp);
  console.log(event.clientX);
  console.log(event.clientY);
  console.log(event.offsetY);
  console.log(event.offsetX);
  console.log(event.screenX);
  console.log(event.screenY);
  console.log(event.pageY);
  console.log(event.pageX);
};

// input.onchange = (event) => {
//   nameId.textContent = event.target.value;
// };
// input.addEventListener("change", (event) => {
//   nameId.textContent = event.target.value;
// });

input[0].addEventListener("input", (event) => {
  nameId.textContent = event.target.value;
});
input[1].addEventListener("input", (event) => {
  const isChecked = event.target.checked;
  check.textContent = isChecked ? "checked" : "unchecked";
});

input[0].addEventListener("blur", () => {
  console.log("blur input");
});
input[0].addEventListener("focus", () => {
  console.log("focus input");
});
