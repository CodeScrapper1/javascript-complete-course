let output;

output = document.getElementById("heading");

// get attributes
console.log(output.id);
console.log(output.getAttribute("id"));
console.log(output.className);
console.log(output.classList);
console.log(output.classList[1]);
console.log(output.textContent);

// update or set attribute
// output.title = "change selector";
output.setAttribute("title", "change selector");

// change content
output.textContent = "First heading";
output.innerText = "inner text change";
output.innerHTML = "<i>inner html change</i>";

// styling
output.style.color = "brown";
output.style.border = "2px solid brown";
output.style.padding = "20px";
output.style.backgroundColor = "orange";
output.style.borderRadius = "10px";
console.log(output);

// CSS selector
console.log(document.querySelector("p"));
console.log(document.querySelector(".second-para"));
console.log(document.querySelector("#second-para-id"));
console.log(document.querySelector("input[type='text']"));
console.log(document.querySelector("li:nth-child(2)").textContent);

// multi selector

// get element by classname
output = document.getElementsByClassName("first-para");
console.log(output[1]);

// query selector all
output = document.querySelectorAll("p");
console.log(output[2].innerHTML);
console.log((output[2].style.color = "orange"));

output.forEach((item, index) => {
  item.style.color = "blue";

  if (index == 1) {
    item.style.color = "red";
  }

  if (index == 2) {
    item.remove();
  }

  if (index == 0) {
    item.innerText = "change text using index";
  }
});
