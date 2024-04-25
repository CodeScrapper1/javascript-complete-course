let description;

const name = "mehtab";
const age = 24;

description = "My name is " + name + " age is " + age;
description = `My name is ${name} age is ${age}`;
console.log(description);

console.log(description[2]);

// uppercase
let uppercase = description.toLocaleUpperCase();
// lowercase
let lowercase = description.toLocaleLowerCase();
console.log(lowercase);

// charAt
// description = description.charAt(6);

// indexOf
// description = description.indexOf("a");
// console.log(description);

// substring
// description = description.substring(3, 7);
// description = description.substring(3);

// slice
// description = description.slice(4); //length 1,2,3,4 ....
// description = description.slice(4, 9); //index 0,1,2,3,4 .... , length 1,2,3,4 ...
// description = description.slice(-14, -9); //length 1,2,3,4 .... , index 0,1,2,3,4 ...

//trim
let fullname = "        mehtab kazmi";
fullname = fullname.trim();

// replace

// description = description.replace("m", "_");
// description = description.replaceAll("m", "_");
// description = description.toLocaleLowerCase().replaceAll("m", "_");

// valueOf
// description = description.valueOf();

//includes
description = description.includes("m");
console.log(description);
