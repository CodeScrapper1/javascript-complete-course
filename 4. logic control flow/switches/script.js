const date = new Date(10, 7, 2024, 8, 0, 0);
const hours = date.getHours();

console.log(hours, "hours");

switch (hours) {
  // case
  case 1:
    console.log("Good Morning");
    break;
  case 2:
    console.log("Good Afternoon");
    break;

  case 3:
    console.log("Good Evening");
    break;
  case 4:
    console.log("Good Night");
    break;
  default:
    console.log("none of these");
}

// calculator example

// let num1 = 10;
// let num2 = 5;
// let operator = "*";

function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      console.log("Sum: ", num1 + num2);
      break;
    case "-":
      console.log("Sub: ", num1 - num2);
      break;
    case "*":
      console.log("Multiple: ", num1 * num2);
      break;
    case "/":
      console.log("Divide: ", num1 / num2);
      break;
    default:
      console.log("none of these");
  }
}

calculator(12, 5, "*");
calculator(10, 4, "/");
calculator(15, 4, "+");
calculator(20, 7, "-");
