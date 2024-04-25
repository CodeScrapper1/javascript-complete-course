let value;

value = new Date();
console.log(value);

// to string
// value = value.toString();

value = new Date(2022, 0, 10, 12, 30, 0);
console.log(value);

value = new Date("2023-06-12");
console.log(value);

value = new Date("2023/06/12");
console.log(value);

value = new Date("06-12-2023");
console.log(value);

value = new Date("06-12-2023 12:40:25");
console.log(value);

// current date
value = Date.now();
console.log(value);

value = Date(1709897721911);
console.log(value);

// miliseconds to seconds

value = Math.floor(Date.now() / (1000 * 60 * 60 * 24 * 30));
console.log(value);

// date methods

value = new Date();

// value = value.getTime();
// value = value.valueOf();

// find current year
// value = value.getFullYear();

// find current month
// value = value.getMonth() + 1;

// find date
// value = value.getDate();

// find day
// value = value.getDay();

// find hours
// value = value.getHours();

// find minutes
// value = value.getMinutes();

// find seconds
// value = value.getSeconds();

// find seconds
// value = value.getMilliseconds();

// value = `${value.getFullYear()}/${value.getMonth() + 1}/${value.getDate()}`;
// value = `${value.getMonth() + 1}-${value.getDate()}-${value.getFullYear()}`;

// localization

// value = value.toLocaleString("default", { month: "short" });
// value = value.toLocaleString("default", {
//   year: "numeric",
//   month: "long",
//   day: "numeric",
//   weekday: "short",
//   hour: "numeric",
//   minute: "numeric",
//   second: "numeric",
//   timeZone: "America/New_york",
// });

// value = Intl.DateTimeFormat("default").format(value);
// value = Intl.DateTimeFormat("en-US").format(value);
value = Intl.DateTimeFormat("en-GB").format(value);
console.log(value);
