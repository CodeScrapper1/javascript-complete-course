let num;

// coerced to  string
num = 10 + Number("8");
num = 10 + "8";

console.log(num, typeof num, Number(num)); // 108

// coerced to number
num = 7 * "3";
console.log(num);

num = Number(null);
console.log(num);

num = Number(true);
console.log(num);

num = 5 + true;
num = 5 + null;
num = 5 + undefined;

console.log(num);
