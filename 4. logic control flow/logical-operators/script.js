// and operator
if (20 < 30 && 30 < 40 && 35 > 40) {
  console.log(true);
} else {
  console.log(false);
}

// or operator
if (20 < 30 || 30 > 40 || 35 > 40) {
  console.log(true);
} else {
  console.log(false);
}

let num;

num = 10 && 15 && 30;
num = 0 && 15 && 30;
num = 10 && 0 && 30;
num = 10 && null && 30;
num = 10 && "" && 30;

// or sign
num = 10 || 15 || 30;
num = 0 || 15 || 30;
num = 10 || 0 || 30;
num = 0 || null || 30;
num = null || "" || undefined;

// ?? operator
num = 5 ?? 10;
num = 0 ?? 10;
num = undefined ?? 10;
num = null ?? 10;
num = "" ?? 10;

console.log(num);
