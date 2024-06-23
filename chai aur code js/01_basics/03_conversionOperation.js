/* converting to Number
"33" => 33
"33abc" => NaN (Not a number)
true=> 1, false=>0
null => 0
undefined => NaN
*/
/* 
let score = "33abc";
let s = null;
let n = undefined;

console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof(valueInNumber));
console.log(valueInNumber);

let valueInS = Number(s);
console.log(valueInS);

let valueInN = Number(n);
console.log(valueInN); */

let x = 3;
const y = x++;

console.log(`x = ${x}, y = ${y}`);
// output expected output: `x:4, y:3`

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);