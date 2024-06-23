// primitive datatypes

// types: string, Number, boolean, null, undefined, Symbol, BigInt

// non-primitive(reference) datatypes

// types: array, objects, functions
/* 
const heros = ["thor", "spiderman", "ironMan"];
console.log(heros);
let myObj = {
    name: "Krishna",
    age: 15,
}
console.log(myObj);

const myFunction = function(){
    console.log("HI sonar family");
}

myFunction(); */

// ***************** stack and heap memory *********

// stack(primitive), heap(non-primitive)

let myYoutbename = "LetsGame";

let anotherNamee = myYoutbename;
anotherNamee = "LetsGame005";

console.log(myYoutbename);
console.log(anotherNamee);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne;

userTwo.email = "usernamw@gmail.com";

console.log(userOne);
console.log(userTwo);