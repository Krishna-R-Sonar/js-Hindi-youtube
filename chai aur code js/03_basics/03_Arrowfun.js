const user = {
    username: "Krishna",
    price: 499,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

/* user.welcomeMessage();
user.username = "sam";
user.welcomeMessage();
console.log(this); */

/* function chaii(){
    let username = "Sonar";
    console.log(this.username); // output: undefined
}

chaii(); */

/* const chaiwala = function(){
    let username = "Sonar";
    console.log(this.username);
}

chaiwala(); */

// arrow function 
/* const chai = () => {
    let username = "Sonar";
    console.log(this);
}

chai(); */

/* const addTwo = (n1, n2) => {
    return n1 + n2
}; */

// const addTwo1 = (n1, n2) => (n1 * n2); // not more than one statement can be used only one statement like (n1 * n2) can be used
/* console.log(addTwo(12,12)); */

/* console.log(addTwo1(12,12)); */

const obj = () => {username: "Sonar"}; 
console.log(obj()); // if parentheses is not given then "undefined" is printed 

const obj1 = () => ({username: "Sonar"}); 
console.log(obj1());