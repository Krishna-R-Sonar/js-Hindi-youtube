function myName(){
    console.log("s");
    console.log("o");
    console.log("n");
    console.log("a");
    console.log("r");
}

// myName();
function addTwoNumber(n1, n2){
    console.log(n1 + n2);
}

// addTwoNumber(3, "4"); // if string is passed as a arg and another number is int then also the int number is converted to string 
/* 
function prodOfNum(n1, n2){
    return n1*n2;
} */

// const ans = prodOfNum(5,5);
// console.log(ans);

/* function loginUserMessage(username){
    return `Congo ${username} you are now logged In!`
} */

// loginUserMessage("Krishna"); // returns a string so store in a variable, will not print the return string if called like this

/* const str = loginUserMessage("Krishna");
console.log(str); */

//function loginMessage(username = "Sam"/*default name is provided*/){
    //return `Congo ${username} you are now logged In`;
//}
//const str = loginMessage("Krishna");
// console.log(str);

function calculateCartPrice(...num1){
    return num1;
}

/* console.log(calculateCartPrice(200, 400, 500)); */

// object in function
function handleObject(anyObj){
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`)
}

handleObject({
    username: "Sammi",
    price: 499,
});

// array in function
function returnArray(getArr){
    return getArr[2];
}

console.log(returnArray([199, 299, 399, 499, 599]));