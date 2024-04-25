// window object or global window object
console.log(window);

// DOM
console.log(window.document);

// get tags in DOM
console.log(document.body);
console.log(document.body.children);
console.log(document.head);
console.log(document.head.children);
console.log(document.head.children[2]);

// get anchor tag
console.log(document.links[0]);

// set property of elements
// document.body.innerHTML = "<h2>Second heading</h2>";

document.write("javascript");

// document.getElementById("header").innerHTML = "<h2>Second heading</h2>";
document.querySelector("#header h2").innerHTML = "second heading";
