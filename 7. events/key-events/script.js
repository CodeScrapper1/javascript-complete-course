const input = document.getElementById("key-input");
const label = document.getElementById("label");

const keyPress = (event) => {
  console.log(event);
  console.log("keypress");

  // on press enter
  if (event.key === "Enter") {
    console.log("enter pressed");
  }

  // click number
  if (event.code === "Digit2") {
    console.log("you pressed 1");
  }

  if (event.code === "KeyY") {
    label.textContent = `you pressed ${event.code}`;
    label.style.color = "yellow";
  }

  if (event.code === "BracketLeft") {
    label.textContent = `you pressed ${event.code}`;
    label.style.color = "brown";
    console.log("you pressed BracketLeft");
  }
};

const keydown = (event) => {
  if (event.altKey) {
    console.log("you pressed altkey");
  }

  if (event.ctrlKey) {
    console.log("you pressed ctrlKey");
  }

  if (event.shiftKey && event.key === "C") {
    console.log("you pressed shift key + C");
  }
};

input.addEventListener("keypress", keyPress);
input.addEventListener("keydown", keydown);
