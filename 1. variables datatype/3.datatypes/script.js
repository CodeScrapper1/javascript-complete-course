// string
const firstname = "tahir";
console.log(firstname, typeof firstname);

// int
const age = 25;
console.log(age, typeof age);

const number = 234343423234234234242n;
console.log(typeof number);

// boolean
// const isenable = false;
const isenable = Boolean("no");
console.log(typeof isenable, isenable);

// null
const lastname = null;
console.log(typeof lastname);

// undefined
const value = undefined;
console.log(value);

// symbols
const valu1 = Symbol("value");
const valu2 = Symbol("value");
if (valu1 === valu2) {
  console.log("true");
} else {
  console.log("false");
}
console.log(typeof valu1);

// object (key value pair)
const user = {
  name: "haider",
  email: "haider@gmail.com",
  age: 26,
};

console.log(typeof user);

const numbers = [12, "mehtab", true, 545445n, 565, 6];
console.log(typeof numbers);
console.log(typeof numbers[3]);

function hello() {
  console.log("hello 123");
}
console.log(hello(), typeof hello);
