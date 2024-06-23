// const codingLang = ["js", "python", "cpp"];
/* 
const val = codingLang.forEach((element) => {
    // console.log(element);
});

console.log(val); // o/p: undefined */

const myNum = [1,2,3,4,5,6,7,8,9];
//console.log(myNum.filter((num) => num>4));

//console.log(myNum.filter((num) => {return num>5})); // in curly brackets return keyword is must to return stuff
const newNums = [];

myNum.forEach((num) => {
    if(num > 4){
        newNums.push(num);
    }
});

console.log(newNums);