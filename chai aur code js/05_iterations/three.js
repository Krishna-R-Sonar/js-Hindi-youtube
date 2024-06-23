// for of

const arr = [1,2,3,4,5,6];

for (const num of arr) {
    // console.log(num);
}

// Maps
// no duplicates in maps are shown, only unique key:value pair are shown
const map = new Map();
map.set('In', "India");
map.set('USA', "United States");
map.set('Uk', "United kingdom");

// console.log(map);

// for of loop for map 
// o/p: [ 'In', 'India' ]
//      [ 'USA', 'United States' ]
//      [ 'Uk', 'United kingdom' ]
/* for(const key of map){
    console.log(key);
} */

for (const [key, value] of map) {
    console.log(key, ':-', value);
}