// 1. arithmetic
// 2. exponents
// 3. increment / decrement
// 4. assignment operator
// 5. comparison

//1.arithmetic operator
let number;

number = 5 + 4;
number = number - 4;
number = 4 * number;
number = number / 7;
number = 20 % 3;
// number /= number;
// number = number / number;
console.log(number);

// 20/5=4, remaining 0
// 20/3 =6 , 20-18=2 modulus

//exponents
let num = 2 ** -6;
console.log(num, 1 / num);

// concate
let string = "mehtab" + " " + "kazmi";
console.log(string);

// assignment
let value = 5;

// value = value + 10;
value += 10;
value -= 10;
value *= 10;
value /= 10;
value %= 10;
value **= 10;
console.log(value);

// comparison operators
let num1 = "1";
// num1 = num1 === 2;
// num1 = num1 !== 2;
// num1 = num1 > 2;
// num1 = num1 >= 2;
// num1 = num1 <= 2;
num1 = num1 < 2;

console.log(num1);

// increment / decrement
let num2 = 2;

num2 = num2++; //post
num2 = ++num2; //pre

// 3

// num2 = num2--; //post
num2 = --num2; //pre
console.log(num2);
