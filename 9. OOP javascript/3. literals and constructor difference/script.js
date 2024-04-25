// string
const strname = "mehtab";
const strObj = new String("mehtab");
console.log(strname, strObj);
console.log(typeof strname, typeof strObj);

console.log(strObj.valueOf(), typeof strObj.valueOf());

console.log(strname.constructor);
console.log(strObj.constructor);

console.log(strname instanceof String);
console.log(strObj instanceof String);

// number
const numAge = 28;
const numObj = new Number(28);

console.log(numAge, numObj);
console.log(typeof numAge, typeof numObj);

console.log(numObj.valueOf(), typeof numObj.valueOf());

console.log(numAge.constructor);
console.log(numObj.constructor);

console.log(numAge instanceof Number);
console.log(numObj instanceof Number);

// array
const array = [1, 23, 34, 45, 5, 5];
const arrayObj = new Array(1, 23, 34, 45, 5, 5);

console.log(array, arrayObj);
console.log(typeof array, typeof arrayObj);

console.log(arrayObj.valueOf(), typeof arrayObj.valueOf());

console.log(array.constructor);
console.log(arrayObj.constructor);

console.log(array instanceof Array);
console.log(arrayObj instanceof Array);

// object
const obj = { name: "mehtab" };
const obj1 = new Object({ name: "mehtab" });

console.log(obj, obj1);
console.log(typeof obj, typeof obj1);

// function

const functionObj = new Function("num", "return num+num");
console.log(functionObj(5));

const simplefunc = function func(num) {
  return num + num;
};
console.log(simplefunc(5));
