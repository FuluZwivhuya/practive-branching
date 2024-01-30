console.log("test");

if (1 === 1) {
  console.log("test");
}

if (1 === 2) {
  console.log("true");
} else {
  console.log("false");
}
//or
3 === 9 ? console.log("true") : console.log("false");
//or
console.log(1 === 8 ? "true" : "false");

let value;
if (1 === 6) {
  value = "a";
} else {
  value = "b";
}
console.log(value);
//anothe expression of the above

let valueA = 1 === 1 ? "a" : "b";
console.log(valueA);

// introducing && (and)
console.log(1 === 1 && 6 === 6 ? "yes" : "no");
console.log(1 === 1 && 6 === 5 ? "true" : "not true");
//
const result = 1 === 1 && 6 === 5;
console.log(result);
//
console.log(result === true ? "a" : "b");

const resulta = 1 === 1 && 6 === 5;
console.log(resulta === true ? "a" : "b");

//introduction to || (or)

if (1 === 1 || 5 === 6) {
  console.log("a");
} else {
  console.log("b");
}
//
const first = 1 === 1;
const second = 5 === 4;
console.log(first, second);
if (first || second) {
  console.log("a");
} else {
  console.log("b");
}
// introducing !== (not)

const firsta = 1 !== 1;
const seconda = 5 !== 4;
console.log(firsta, seconda);
if (firsta || seconda) {
  console.log("a");
} else {
  console.log("b");
}
//
const user = fulu
const permission = user === 'mulaudzi'? 'admin': 'none';
console.log(permission);

const status = hacked
const isAdmin = user ==='fulu' && status !== 'hacked';
const permissions = isAdmin ? 'admin': 'none';
console.log (permissions);
