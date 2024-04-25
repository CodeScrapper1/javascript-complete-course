// on page load
// window.onload = () => {
//   document.getElementById("heading").textContent = "on load event";
// };

const heading = document.getElementById("heading");
window.addEventListener("load", () => {
  heading.textContent = "on load event";
});

// dom load
window.addEventListener("DOMContentLoaded", () => console.log("DOM loading"));

// scroll event

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 400) {
    document.body.style.backgroundColor = "yellow";
  } else {
    document.body.style.backgroundColor = "white";
  }
});

window.addEventListener("focus", () => {
  heading.style.color = "blue";
});

// on blur
window.addEventListener("blur", () => {
  heading.style.color = "red";
});

// href
console.log(window.location.href);
