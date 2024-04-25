const date = new Date(10, 7, 2024, 6, 0, 0);
const hours = date.getHours();

if (hours >= 18 && hours <= 24) {
  console.log("Good Evening");
} else if (hours >= 0 && hours < 6) {
  console.log("Good night");
} else if (hours >= 6 && hours < 12) {
  console.log("Good Morning");
} else {
  console.log("Good Afternoon");
}
// console.log(hours);

// nested if else
if (hours >= 18) {
  if (hours <= 24) {
    console.log("Good evening");
  }
} else if (hours >= 0) {
  if (hours < 6) {
    console.log("Good Night");
  } else {
    console.log("none");
  }
} else if (hours >= 6) {
  if (hours < 12) {
    console.log("Good Morning");
  }
} else {
  console.log("Good Afternoon");
}
