const userEmail = " ";

if(userEmail){
    console.log("Gott user email");
} else {
    console.log("Don't have user email");
}

// falsy value

// false, 0, -0, BigInt, "", null, undefined, NaN

// truthy values

// "0", 'falsee', " ", [], {}, function(){};
/* const emptyObj = {};

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}
 */

// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20;



console.log(val1);

// ternary operator

// condition? true: false