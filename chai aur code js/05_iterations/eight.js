const arr = [1,2,3];

/* const arrTotal = arr.reduce(function(accumulator, currentValue){
    console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`);
    return accumulator + currentValue;
}, 0); */

const arrtotal = arr.reduce((acc, currval) => acc+currval, 0);

console.log(arrtotal);