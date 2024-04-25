const btns = document.querySelectorAll("button");
const img = document.querySelector("img");
console.log(btns[0]);

// event
// btns[0].onclick = function () {
//   console.log("click event");
//   alert("click event");
// };

// btns[0].onclick = () => {
//   console.log("click event");
//   alert("click event");
// };

// btns[0].onclick = () => alert("click event");

// btns[0].addEventListener(type,func)
btns[0].addEventListener("click", () => console.log("click event"));
btns[1].addEventListener("contextmenu", () => console.log("right click event"));
btns[2].addEventListener("dblclick", () => console.log("duble click event"));
btns[3].addEventListener("mouseover", () => console.log("Mouse over event"));
btns[4].addEventListener("mousedown", () => console.log("Mouse down event"));
btns[5].addEventListener("mouseup", () => console.log("Mouse up event"));
btns[6].addEventListener("mouseout", () => console.log("Mouse out event"));
btns[7].addEventListener("wheel", () => console.log("Wheel event"));
img.addEventListener("dragstart", () => console.log("drag start event"));
img.addEventListener("drag", () => console.log("on drag event"));
img.addEventListener("dragend", () => console.log("drag end event"));
