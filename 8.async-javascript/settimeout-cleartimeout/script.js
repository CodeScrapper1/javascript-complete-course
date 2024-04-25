// settimeout - takes callback function and a time to wait

setTimeout(() => {
  console.log("callback set timeout");
}, 2000);
// setTimeout(function () {});

const heading = document.getElementById("heading");
// change heading content

setTimeout(function () {
  heading.textContent = "settimeout is running successfully";
}, 2000);

const changeParagraph = () => {
  document.querySelector("p").textContent = "Now Its done";
};

// setTimeout(changeParagraph, 2500);

const clear = setTimeout(changeParagraph, 2500);

document.querySelector("button").addEventListener("click", () => {
  clearTimeout(clear);
  console.log("cancelled");
});

// settimeout and cleartimeout task
const start = document.getElementById("start");
const stop = document.getElementById("stop");

let interval;
const startTime = () => {
  interval = setInterval(randomValue, 1000);
};

const randomValue = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.querySelector("h2").style.color = `#${randomColor}`;
};

// clear time interval
const clearTime = () => {
  clearInterval(interval);
};
start.addEventListener("click", startTime);
stop.addEventListener("click", clearTime);
