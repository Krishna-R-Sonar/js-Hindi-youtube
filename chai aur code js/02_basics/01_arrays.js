/* const myArr = [1,2,3,4,5,6,7,8,9]; */
const myHero = ["Mummy", "Papa"];

/* console.table(myHero);

const myArr2 = new Array(2,4,6,8);
console.log(myArr2[1]); */

// array methods

// .push pushes the number at end of an array
// myArr.push(10);
// myArr.push(12);
// .pop pops the last number of an array
// myArr.pop();

// adds the element to start of an array
// myArr.unshift(0);
// removes the element to start of an array
// myArr.shift();
// console.log(myArr);
// console.log(myArr.includes(0)); // returns a booolean value
/* console.log(myArr.indexOf(7)); */

// const newArr = myArr.join();

/* console.log(myArr);
console.log(newArr); // typeof string */

// slice, splice
const myArr = [1,2,3,4,5,6,7,8,9];
console.log("A ", myArr);
/* const myn1 = myArr.slice(1, 3);// 3 is excluded

console.log(myn1);

console.log("B ", myArr); */

const myn2 = myArr.splice(1,3);
console.log(myArr); // due to splice command on myArr index(1,3) are removed from the original array(myArr);
console.log(myn2); // .splice(1,3) 3 is also included but in slice 3 was not included