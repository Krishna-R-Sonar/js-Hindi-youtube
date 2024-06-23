// Immediately Invoked Function Expressions (IIFE)
// Q: why we use iife imp question for interview
// iife syntax: ()(); semicolon is important to know that statement is terminating
(function chai(){
    // named iife
    console.log(`DB connected`);
})();

((name) => {
    // simple iife
    console.log(`DB CONNECTED TWO ${name}`)
})('Abhishek');