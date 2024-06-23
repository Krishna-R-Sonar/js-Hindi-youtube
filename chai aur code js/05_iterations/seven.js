const myNumer = [1,2,3,4,5,6,7,8,9];

// const newNum = myNumer.map((num) => {return num+10})
// console.log(newNum);

// chain of map
const newNum = myNumer.map((num)=> num*10).map((num)=> num*100);
console.log(newNum);