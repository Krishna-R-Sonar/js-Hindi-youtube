// singleton

// object literals
const mySym = Symbol("key1");

const jsUser = {
    name: "pappu",
    "full name": "pappu singh",
    [mySym]: "key12",
    age: 12,
    location: "dholakpur",
    email: "pappukidandi@mail.com",
    isLoggedIn: false,
    loggedDays: ["suunday", "moonday"],
};

/* console.log(jsUser.name); // method 1 to extract name
console.log(jsUser["name"]); // method 2 to extract name
console.log(jsUser["full name"]); // full name cannot be accessed by method 1
console.log(jsUser[mySym]); // to extract symbol


jsUser.email = "pappu1123@";
Object.freeze(jsUser); // no changes in the object will be entertained after this statement;
jsUser.email = "pappu@123micro.com";
console.log(jsUser); */

/* 
output of line 26;
{
    name: 'pappu',
    'full name': 'pappu singh',
    age: 12,
    location: 'dholakpur',
    email: 'pappu1123@',
    isLoggedIn: false,
    loggedDays: [ 'suunday', 'moonday' ],
    [Symbol(key1)]: 'key12'
  } */

jsUser.greeting = function(){
    console.log("Helo JS user!");
}

jsUser.greeting2 = function(){
    console.log(`Helo JS user!, ${this.name}`);
}

// console.log(jsUser.greeting); // output: [Function (anonymous)], here only the reference of the function is returned
// console.log(jsUser);
// console.log(jsUser.greeting()); // o/p: Helo JS user!
console.log(jsUser.greeting2());
