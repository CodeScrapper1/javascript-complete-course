let list;

// array literal
const numbers = [12, 34, 5446, 56, 654, 23];
const diffValues = [true, "mehtab", 5446, 56.43, null, 23];

// array constuctor , objects
const colors = new Array("white", "black", "yellow", "green");

// list = colors[2];
// list = colors[0] + " " + colors[2];
list = `first color is ${colors[0]} and second one is ${colors[2]}`;

// array length
list = colors.length;

// change array index value
// colors[0] = "blue";

// add value in last index
colors[colors.length] = "red";
colors[colors.length] = "pink";
// console.log(colors, colors.length);

// array methord
const numericArr = [232, 65, 7, 5, 8, 453, 23];

// lifo (last in first out) - filo (first in last out)
// push and pop uses stack
// push -- add new value at the end
numericArr.push(12);
numericArr.push(20);
numericArr.push(90);
numericArr.push(87);
numericArr.push(34);
numericArr.push(55);

// pop - to remove value from last in array
numericArr.pop();
numericArr.pop();
numericArr.pop();

// unshift - add value in start
numericArr.unshift(88);
numericArr.unshift(67);

// shift - remove value from start
numericArr.shift();
numericArr.shift();
numericArr.shift();

// reverse arry
numericArr.reverse();
console.log(numericArr);

const include = numericArr.includes(21);
const index = numericArr.indexOf(453);

// const covertToString = numericArr.toString().replaceAll(",", " ");
const covertToString = numericArr.join().replaceAll(",", " ");

// slice
// const slice = numericArr.slice(2, 5); // 2 is index and 5 in length
const slice = numericArr.slice(-5, -1); // 2 is index and 5 in length

const splice = numericArr.splice(4, 3);
console.log(splice);
